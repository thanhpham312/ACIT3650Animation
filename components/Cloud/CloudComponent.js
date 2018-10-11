import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import CloudStyle from './CloudStyle';
import Constants from '../../styles/Constants';
import * as Animatable from 'react-native-animatable';
import sample from 'lodash/sample';

export default class CloudComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moved: false
    }
  }
  
  static defaultProps = {
  }

  render() {
    return (
      <Animatable.Image
        style={[CloudStyle.Cloud,
          StyleSheet.create({
            Cloud: {
              height: Dimensions.get('window').width*this.props.CloudSize,
              width: Dimensions.get('window').width*this.props.CloudSize,
              top: Dimensions.get('window').height*this.props.CloudLocation,
              left: -Dimensions.get('window').width*this.props.CloudSize
            }
          }).Cloud
        ]}
        source={require('../../assets/cloud_white.png')}
        easing="linear"
        animation={{
          0: {
            translateX: 0
          },
          1: {
            translateX: Dimensions.get('window').width + Dimensions.get('window').width*this.props.CloudSize
          }
        }}
        duration={3000}
      >

      </Animatable.Image>
    )
  }
}