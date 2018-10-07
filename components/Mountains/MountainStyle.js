import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';

const MountainStyle = StyleSheet.create({
  Mountain: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: Dimensions.get('window').width*0.5,
    borderRightWidth: Dimensions.get('window').width*0.5,
    borderBottomWidth: Dimensions.get('window').width,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Constants.Color.Teal['500'],
    borderRadius: 10,
    position: 'absolute',
    top: Dimensions.get('window').height,
  }
});

export default MountainStyle;