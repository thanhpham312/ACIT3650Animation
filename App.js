import React from 'react';
import { StyleSheet, View } from 'react-native';
import GeneralStyle from './styles/GeneralStyle';
import SkyComponent from './components/Sky/SkyComponent';
import GroundComponent from './components/Ground/GroundComponent';
import MountainsComponent from './components/Mountains/MountainsComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={GeneralStyle.MainView}>
        <MountainsComponent />
        <GroundComponent />
        <SkyComponent />
      </View>
    );
  }
}


