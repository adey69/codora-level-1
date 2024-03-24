import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
  internalContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  careerContainer: {
    paddingStart: 12,
    marginBottom: 8,
  },
  heartButton: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: 12,
  },
  heartUnfilled: {
    tintColor: COLORS.white,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.white,
  },
  careerInfo: {
    fontSize: 16,
    color: COLORS.white,
  },
  originInfo: {
    color: COLORS.infoRed,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bioContainer: {
    width: Dimensions.get('screen').width / 4 - 1,
    paddingStart: 8,
  },
  bioInfo: { fontWeight: '700', fontSize: 16 },
  bio: {
    color: COLORS.white,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // Center overlay content vertically
    alignItems: 'center', // Center overlay content horizontally
    backgroundColor: COLORS.black,
    opacity: 0.3,
  },
});
