import { StyleSheet } from 'react-native';
import Constants from './Constants';

const SunStyle = StyleSheet.create({
  SunWrapper: {
    height: Constants.Size.Sun*2,
    width: Constants.Size.Sun*2,
    borderRadius: Constants.Size.Sun,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Sun: {
    height: Constants.Size.Sun,
    width: Constants.Size.Sun,
    borderRadius: Constants.Size.Sun/2,
    backgroundColor: Constants.Color.Orange['500'],
    elevation: 3,
  }
});

export default SunStyle;