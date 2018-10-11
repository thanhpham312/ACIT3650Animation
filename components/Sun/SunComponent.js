import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import SunStyle from './SunStyle';
import * as Animatable from 'react-native-animatable';

export default class SunComponent extends Component {

  // bounce = () => {
  //   this.view.bounce(2000).then((endState) => {
  //     if (endState.finished) {
  //       this.setState({
  //         moved: !this.state.moved
  //       });
  //       this.view.transition = 'backgroundColor';
  //       this.props.ChangeDayNight();
  //     }
  //   })
  // };

  handleViewRef = (ref) => {
    this.view = ref
  };

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
      <Animatable.View
        ref={this.handleViewRef}
        style={SunStyle.SunWrapper}
        >
        <TouchableOpacity
          onPress={() => {
            this.setState({
              moved: !this.state.moved
            });
            this.props.ChangeDayNight();
          }}
        >
          <Animatable.View
            style={this.state.moved ? SunStyle.SunMovedtoTop : SunStyle.Sun}
            transition="backgroundColor"
            duration={1500}
          ></Animatable.View>
        </TouchableOpacity>
      </Animatable.View>
    )
  }
}