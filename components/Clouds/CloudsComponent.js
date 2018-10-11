import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Dimensions from 'Dimensions';
import CloudsStyle from './CloudsStyle';
import * as Animatable from 'react-native-animatable';

export default class SunComponent extends Component {

  constructor() {
    super();
    this.state = {
      moved: false
    }
  }
  
  static defaultProps = {
  }

  render() {
    return (
      <Animatable.Image
        style={CloudsStyle.Clouds}
        animation="CloudsFloat"
        source={require('../../assets/clouds.png')}
        easing="linear"
        duration={50000}
      >

      </Animatable.Image>
    )
  }
}

Animatable.initializeRegistryWithDefinitions({
  CloudsFloat: {
    0: {
      translateX: -1500
    },
    1: {
      translateX: Dimensions.get('window').width
    }
  }
});