import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import BirdStyle from './BirdStyle';
import * as Animatable from 'react-native-animatable';
import AnimatedSprite from 'react-native-animated-sprite';
import BirdSprite from '../../assets/bird/BirdSprite';

export default class BirdComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        animationType: 'FLY',
    }
  }

  render() {
    return (
      <Animatable.View
        style={[BirdStyle.Bird,
          StyleSheet.create({
            Bird: {
              height: this.props.BirdSize,
              width: this.props.BirdSize,
              top: this.props.BirdLocation,
              left: -this.props.BirdSize
            }
          }).Bird
        ]}
        easing="linear"
        animation={{
          0: {
            translateX: -this.props.BirdSize
          },
          1: {
            translateX: Dimensions.get('window').width + this.props.BirdSize
          }
        }}
        duration={10000}
        delay = {this.props.BirdDelay}
      >
        <AnimatedSprite
          ref={'BirdRef'}
          sprite={BirdSprite}
          animationFrameIndex={BirdSprite.animationIndex(this.state.animationType)}
          loopAnimation={true}
          coordinates={{
            top: 0,
            left: 0,
          }}
          size={{
            width: this.props.BirdSize,
            height: this.props.BirdSize,
          }}
          onPress={() => {
            this.setState({
              animationType: 'HIT'
            })
          }}
        />
      </Animatable.View>
      
    )
  }
}