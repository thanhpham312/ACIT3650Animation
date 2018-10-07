import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Dimensions from 'Dimensions';
import GroundStyle from './GroundStyle';
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
      <Animatable.View
        style={GroundStyle.Ground}
        animation="GroundSlidesIn"
        duration={5000}
      >

      </Animatable.View>
    )
  }
}

Animatable.initializeRegistryWithDefinitions({
  GroundSlidesIn: {
    0: {
      top: Dimensions.get('window').height
    },
    1: {
      top: Dimensions.get('window').height - Dimensions.get('window').width*0.3
    }
  }
});