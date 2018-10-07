import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';

const SunStyle = StyleSheet.create({
  SunWrapper: {
    height: Constants.Size.Sun*2,
    width: Constants.Size.Sun*2,
    borderRadius: Constants.Size.Sun,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: Dimensions.get('window').width/2 - Constants.Size.Sun,
    top: Dimensions.get('window').height/2 - Constants.Size.Sun
  },
  SunWrapperMovedtoTop: {
    height: Constants.Size.Sun*2,
    width: Constants.Size.Sun*2,
    borderRadius: Constants.Size.Sun,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 20,
    top: 40,
  },
  Sun: {
    height: Constants.Size.Sun,
    width: Constants.Size.Sun,
    borderRadius: Constants.Size.Sun/2,
    backgroundColor: Constants.Color.Orange['500'],
    elevation: 3,
  },
  SunMovedtoTop: {
    height: Constants.Size.Sun*1.5,
    width: Constants.Size.Sun*1.5,
    borderRadius: Constants.Size.Sun*3/4,
    backgroundColor: Constants.Color.DeepOrange['500'],
    elevation: 3,
  }
});

export default SunStyle;