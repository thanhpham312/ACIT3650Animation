import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';

const CloudStyle = StyleSheet.create({
  Cloud: {
    height: Dimensions.get('window').width*0.3,
    width: Dimensions.get('window').width*0.3,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('window').height*0.1,
    left: 0
  }
});

export default CloudStyle;