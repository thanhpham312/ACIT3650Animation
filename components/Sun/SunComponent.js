import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import SunStyle from '../../styles/SunStyle';
import * as Animatable from 'react-native-animatable';

export default class SunComponent extends Component {

  bounce = () => {
    this.view.bounce(800).then((endState) => {
      console.log(endState.finished ? 'bounce finished' : 'bounce cancelled');
    })
  };

  handleViewRef = (ref) => {
    this.view = ref
  };

  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }
  
  static defaultProps = {
  }

  render() {
    return (
      <Animatable.View ref={this.handleViewRef}>
        <TouchableOpacity
          style={SunStyle.SunWrapper}
          onPress={this.bounce}
        >
          <Animatable.View
            style={SunStyle.Sun}
          ></Animatable.View>
        </TouchableOpacity>
      </Animatable.View>
    )
  }
}