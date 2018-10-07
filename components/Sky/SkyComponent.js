import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';
import GeneralStyle from '../../styles/GeneralStyle';
import SunComponent from '../../components/Sun/SunComponent';
import CloudComponent from '../../components/Cloud/CloudComponent';
import * as Animatable from 'react-native-animatable';

export default class SkyComponent extends Component {

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
        style={[GeneralStyle.MainView, SkyStyle.Sky]}
      >
        <SunComponent />
        <CloudComponent />
      </Animatable.View>
    )
  }
}

const SkyStyle = StyleSheet.create({
    Sky: {
      backgroundColor: Constants.Color.LightBlue['500'],
      elevation: -5
    }
  });

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