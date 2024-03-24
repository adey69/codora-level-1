import React, { useCallback, useMemo } from 'react';
import PieChart from 'react-native-pie-chart';
import Animated from 'react-native-reanimated';
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native';
import styles from './styles';
import { APP_TEXT } from '../../strings';
import useChartAnimated from './Hooks/useChartAnimations';
import { Images } from '../../assets/images';
import { COLORS } from '../../theme';
import { Separator } from '..';

const widthAndHeight = 200;
const series = [123, 321, 123, 789, 537];
const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

interface IChartContainerProps {
  plateAppearances: number;
  bases: IBaseRecord;
}

const ChartContainer = ({ plateAppearances, bases }: IChartContainerProps) => {
  const { chartAnimated } = useChartAnimated();
  const baseRecords = useMemo(() => Object.values(bases), [bases]);

  const renderSeparator = useCallback(
    () => <Separator direction="horizontal" />,
    [],
  );

  const renderBaseItem = useCallback(
    ({ item: score, index }: ListRenderItemInfo<number>) => (
      <View style={styles.baseRecordContainer}>
        <View style={styles.baseIndexContainer}>
          <View
            style={[
              styles.baseRecordCircle,
              { borderColor: sliceColor[index] },
            ]}
          />
          <Text style={styles.baseLabel}>{index + 1}B</Text>
        </View>
        <Text style={styles.baseScore}>{score}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.chartSection}>
      <View style={styles.chartHeadingContainer}>
        <Image source={Images.chart} style={styles.graphIcon} />
        <Text>{APP_TEXT.keyStats}</Text>
      </View>
      <View style={styles.chartContainer}>
        <Animated.View style={chartAnimated}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverFill={COLORS.yellowBg}
            coverRadius={0.7}
          />
          <View style={styles.totalRunsContainer}>
            <Text style={styles.totalRuns}>{plateAppearances}</Text>
            <Text style={styles.totalRunsLabel}>{APP_TEXT.pa}</Text>
          </View>
        </Animated.View>
      </View>
      <FlatList
        data={baseRecords}
        renderItem={renderBaseItem}
        scrollEnabled={false}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default React.memo(ChartContainer);
