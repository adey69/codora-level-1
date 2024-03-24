import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellowBg,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 60,
  },
  headerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.darkGreen,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  searchInputWrapper: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
