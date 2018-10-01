import React from 'react';
import { StyleSheet, View } from 'react-native';
import GeneralStyle from './styles/GeneralStyle';
import SunComponent from './components/Sun/SunComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={GeneralStyle.MainView}>
        <SunComponent />
      </View>
    );
  }
}


