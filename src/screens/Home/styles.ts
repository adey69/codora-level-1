import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: COLORS.yellowBg,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.black,
  },
  listItem: {
    padding: 8,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
});
