// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

let r360;
let welcomePanelTag

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [
      new appModule()
    ],
    ...options,
  });

  // INICIALIZACION DE PANELES
  const welcomePanel = new Surface(500,700, Surface.SurfaceShape.Flat)
  
  // COLOCAR EN PANELES
  welcomePanel.setAngle(0,0)
  
  // RENDERIZADO
  welcomePanelTag = r360.renderToSurface(
    r360.createRoot('welcomePanel', { /* initial props */ }),
    welcomePanel
  );

  r360.compositor.setBackground(r360.getAssetURL('BuinZoo.jpg'));
}

class appModule extends Module {
  cebra; 
  garza;
  grulla_paraiso;
  oveja_somalia;
  cisne_vulgar;
  constructor(){
    super('appModule')
  }

  start(){
    this.cebra = new Surface(50,50,Surface.SurfaceShape.Flat)
    this.cebra.setAngle(-1.26,-0.3)
    r360.renderToSurface(
      r360.createRoot('infoPanel', { 
        id:'cebra',
        text: 'La cebra común (Equus quagga) es el tipo más común y extendido de cebra. Es propia de las llanuras y sabanas desde el sur de Etiopía a lo largo del África oriental, y tan al sur como Angola y la parte oriental de Sudáfrica.'
      }),
      this.cebra
    );

    this.garza = new Surface(50,50,Surface.SurfaceShape.Flat)
    this.garza.setAngle(-0.75,-0.13)
    r360.renderToSurface(
      r360.createRoot('infoPanel', { 
        id:'garza',
        text:'La garza real (Ardea cinerea) o airón es una especie de ave pelecaniforme de la familia Ardeidae propia de Eurasia y África. Es un ave acuática esbelta y de gran tamaño, de largos cuello y patas, con plumaje principalmente gris. Habita en ríos, lagos y todo tipo de humedales de agua dulce y salobre.'
      }),
      this.garza
    );

    this.grulla_paraiso = new Surface(50,50,Surface.SurfaceShape.Flat)
    this.grulla_paraiso.setAngle(-0.4,-0.4)
    r360.renderToSurface(
      r360.createRoot('infoPanel', { 
        id:'grulla_paraiso',
        text:'La grulla del paraíso o grulla de Stanley (Anthropoides paradiseus) es una especie de ave gruiforme de la familia Gruidae que habita en los países del África austral. No se conocen subespecies. La grulla del paraíso es el ave nacional de Sudáfrica.'
      }),
      this.grulla_paraiso
    );

    this.oveja_somalia = new Surface(50,50,Surface.SurfaceShape.Flat)
    this.oveja_somalia.setAngle(-0.35,0)
    r360.renderToSurface(
      r360.createRoot('infoPanel', { 
        id:'oveja_somalia',
        text:'La oveja de Somalia, es una raza ovina del este africano. Esta raza pertenece al tipo de razas de ovinas que acumulan grasa en la grupa, además se la reúne con las razas ovinas de pelo, y con las de carne. Posee orejas cortas. Habitualmente su peso oscila entre 35 a 45 kg.'
      }),
      this.oveja_somalia
    );

    this.cisne_vulgar = new Surface(50,50,Surface.SurfaceShape.Flat)
    this.cisne_vulgar.setAngle(0.6,-0.5)
    r360.renderToSurface(
      r360.createRoot('infoPanel', { 
        id:'cisne_vulgar',
        text:'El cisne vulgar, también llamado cisne mudo o cisne blanco, es una especie de ave anseriforme de la familia Anatidae propia del Hemisferio Norte.'
      }),
      this.cisne_vulgar
    );

    r360.detachRoot(welcomePanelTag)
  }

  resizePanel(width, height, id){
    switch(id){
      case 'cebra':
        this.cebra.resize(width, height)
        break;
  
      case 'garza':
        this.garza.resize(width, height)
        break;

      case 'grulla_paraiso':
        this.grulla_paraiso.resize(width, height)
        break;
      
      case 'oveja_somalia':
        this.oveja_somalia.resize(width, height)
        break;
      
      case 'cisne_vulgar':
        this.cisne_vulgar.resize(width, height)
        break;

      default:
        this.cebra.resize(width, height)
        this.garza.resize(width, height)
        this.grulla_paraiso.resize(width, height)
        this.oveja_somalia.resize(width, height)
        this.cisne_vulgar.resize(width, height)
        break;
    }
  }
}

window.React360 = {init};