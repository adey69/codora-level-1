import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  chartSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  chartHeadingContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  graphIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  chartContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalRunsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalRuns: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.black,
  },
  totalRunsLabel: {
    fontSize: 16,
    color: COLORS.black,
  },
  baseRecordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  baseIndexContainer: {
    flexDirection: 'row',
  },
  baseRecordCircle: {
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 8,
    borderWidth: 4,
  },
  baseLabel: {
    fontSize: 16,
    color: COLORS.black,
  },
  baseScore: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
});
