import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.borderGrey,
  },
  vertical: {
    width: 1,
    height: '90%',
  },
  horizontal: {
    width: '100%',
    height: 2,
  },
});
