import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import GeneralStyle from '../../styles/GeneralStyle';
import MountainStyle from './MountainStyle';
import * as Animatable from 'react-native-animatable';

export default class MountainsComponent extends Component {

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
      <Animatable.View style={GeneralStyle.MainView}>
        <Animatable.View
          style={[MountainStyle.Mountain, IndividualMountainStyle.Mountain1]}
          animation="Mountain1SlidesIn"
          duration={5000}
        >
        </Animatable.View>
        <Animatable.View
          style={[MountainStyle.Mountain, IndividualMountainStyle.Mountain2]}
          animation="Mountain2SlidesIn"
          duration={4000}
        >
        </Animatable.View>
        <Animatable.View
          style={[MountainStyle.Mountain, IndividualMountainStyle.Mountain3]}
          animation="Mountain3SlidesIn"
          duration={4500}
        >
        </Animatable.View>
      </Animatable.View>
    )
  }
}

const IndividualMountainStyle = StyleSheet.create({
  Mountain1: {
    left: -100
  },
  Mountain2: {
    left: 10
  },
  Mountain3: {
    left: 150
  },
});

Animatable.initializeRegistryWithDefinitions({
  Mountain1SlidesIn: {
    0: {
      top: Dimensions.get('window').height
    },
    1: {
      top: Dimensions.get('window').height - Dimensions.get('window').width
    }
  },
  Mountain2SlidesIn: {
    0: {
      top: Dimensions.get('window').height
    },
    1: {
      top: Dimensions.get('window').height - Dimensions.get('window').width*0.7
    }
  },
  Mountain3SlidesIn: {
    0: {
      top: Dimensions.get('window').height
    },
    1: {
      top: Dimensions.get('window').height - Dimensions.get('window').width*0.8
    }
  }
});