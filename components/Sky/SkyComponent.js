import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';
import GeneralStyle from '../../styles/GeneralStyle';
import SunComponent from '../../components/Sun/SunComponent';
import CloudsComponent from '../../components/Clouds/CloudsComponent';
import BirdComponent from '../../components/Bird/BirdComponent';
import * as Animatable from 'react-native-animatable';
import sample from 'lodash/sample';

export default class SkyComponent extends Component {

  constructor() {
    super();
    this.state = {
      DayNight: true,
      Clouds: []
    }
  }

  ChangeDayNight = () => {
    this.setState({
      DayNight: !this.state.DayNight
    })
    console.log(this.state.DayNight)
  }

  

  render() {
    return (
      <Animatable.View
        ref= {
          (component) => {
            this.SkyBackground = component;
          }
        }
        style={[GeneralStyle.MainView, this.state.DayNight ? SkyStyle.SkyDay :  SkyStyle.SkyNight]}
        transition="backgroundColor"
        duration={3000}
      >
        <SunComponent ChangeDayNight={this.ChangeDayNight} />
        <CloudsComponent />
        <BirdComponent
          BirdSize={59}
          BirdLocation={50}
          BirdDelay={0}
        />
        <BirdComponent
          BirdSize={71}
          BirdLocation={200}
          BirdDelay={2000}
        />
        <BirdComponent
          BirdSize={80}
          BirdLocation={125}
          BirdDelay={2500}
        />
        <BirdComponent
          BirdSize={82}
          BirdLocation={750}
          BirdDelay={5000}
        />
        <BirdComponent
          BirdSize={80}
          BirdLocation={70}
          BirdDelay={8000}
        />
        <BirdComponent
          BirdSize={75}
          BirdLocation={90}
          BirdDelay={8500}
        />
        <BirdComponent
          BirdSize={77}
          BirdLocation={95}
          BirdDelay={12000}
        />
        <BirdComponent
          BirdSize={72}
          BirdLocation={85}
          BirdDelay={15000}
        />
        <BirdComponent
          BirdSize={75}
          BirdLocation={115}
          BirdDelay={16000}
        />
        <BirdComponent
          BirdSize={85}
          BirdLocation={58}
          BirdDelay={17000}
        />
        <BirdComponent
          BirdSize={78}
          BirdLocation={85}
          BirdDelay={21000}
        />
        <BirdComponent
          BirdSize={85}
          BirdLocation={75}
          BirdDelay={23000}
        />
        <BirdComponent
          BirdSize={75}
          BirdLocation={180}
          BirdDelay={23500}
        />
        <BirdComponent
          BirdSize={55}
          BirdLocation={210}
          BirdDelay={25000}
        />
        <BirdComponent
          BirdSize={125}
          BirdLocation={100}
          BirdDelay={28000}
        />
      </Animatable.View>
    )
  }
}

const SkyStyle = StyleSheet.create({
    SkyDay: {
      backgroundColor: Constants.Color.LightBlue['500'],
      elevation: -5
    },
    SkyNight: {
      backgroundColor: Constants.Color.BlueGrey['800'],
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