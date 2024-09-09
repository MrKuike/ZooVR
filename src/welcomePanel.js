import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  NativeModules
} from 'react-360';

const appModule = NativeModules.appModule

export default class WelcomePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image:{
        src:'Logo.jpg',
        width: 300,
        height: 300
      }
    }
  }

    render() {
      const{image} = this.state;
      return (
        <View style={styles.panel}>
          <Image source={asset(image.src)} style={{width: image.width , height: image.height}}/>
          <View style={styles.greetingBox}>
          <VrButton onClick={() => appModule.start()}>
            <Text style={styles.greeting}>
            Bienvenido a ZooVR (Demo)
            </Text>
          </VrButton>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 325,
    height: 425,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  },
});
