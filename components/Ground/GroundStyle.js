import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Constants from '../../styles/Constants';

const GroundStyle = StyleSheet.create({
  Ground: {
    height: Dimensions.get('window').width*2,
    width: Dimensions.get('window').width*2,
    borderRadius: Dimensions.get('window').height,
    backgroundColor: Constants.Color.Teal['800'],
    transform: [
        {scaleX: 2}
    ],
    position: 'absolute',
    top: Dimensions.get('window').height
  }
});

export default GroundStyle;