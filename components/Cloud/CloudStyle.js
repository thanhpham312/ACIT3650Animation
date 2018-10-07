import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';

const CloudStyle = StyleSheet.create({
  Cloud: {
    height: Dimensions.get('window').width*0.2,
    width: Dimensions.get('window').width*0.2,
    position: 'absolute',
    top: Dimensions.get('window').height*0.3
  }
});

export default CloudStyle;