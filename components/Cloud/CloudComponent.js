import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Dimensions from 'Dimensions';
import CloudStyle from './CloudStyle';
import * as Animatable from 'react-native-animatable';

export default class CloudComponent extends Component {

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
        style={CloudStyle.Cloud}
        source={require('../../assets/cloud_white.png')}
      >

      </Animatable.Image>
    )
  }
}