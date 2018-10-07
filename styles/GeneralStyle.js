import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from './Constants';

const GeneralStyle = StyleSheet.create({
  MainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  buttons: {
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  }
});

export default GeneralStyle;