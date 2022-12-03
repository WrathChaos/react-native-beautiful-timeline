/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { DashProps } from 'react-native-dash-2';
import Item from './components/Item/Item';
import { ITimeline } from './models';
/**
 * ? Local Imports
 */
import styles from './Timeline.style';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface TimelineProps extends DashProps {
  timelineStyle?: CustomStyleProp;
  cardStyle?: CustomStyleProp;
  cardTitleTextStyle?: StyleProp<TextStyle>;
  cardSubtitleTextStyle?: StyleProp<TextStyle>;
  data: ITimeline[];
  dayTextStyle?: StyleProp<TextStyle>;
  monthTextStyle?: StyleProp<TextStyle>;
  pointStyle?: StyleProp<ViewStyle>;
  dashColor?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle,
  cardStyle,
  cardTitleTextStyle,
  cardSubtitleTextStyle,
  dayTextStyle,
  monthTextStyle,
  pointStyle,
  dashColor,
  ...rest
}) => {
  const renderItem = (item: any, index: number) => {
    const isLastMember = index === data.length - 1;
    return (
      <Item
        {...rest}
        data={item}
        list={item.data}
        isLastMember={isLastMember}
        cardStyle={cardStyle}
        cardTitleTextStyle={cardTitleTextStyle}
        cardSubtitleTextStyle={cardSubtitleTextStyle}
        dayTextStyle={dayTextStyle}
        monthTextStyle={monthTextStyle}
        pointStyle={pointStyle}
        dashColor={dashColor}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, timelineStyle]}>
      <FlatList
        data={data}
        style={styles.listStyle}
        contentInset={styles.contentInset}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => renderItem(item, index)}
        {...rest}
      />
    </SafeAreaView>
  );
};

export default Timeline;
