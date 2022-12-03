/* eslint-disable react/function-component-definition */
import React from 'react';
import { View, StyleProp, FlatList, ViewStyle, TextStyle } from 'react-native';
import Card from '../Card/Card';
import PointLine from '../PointLine/PointLine';
import { ITimeline, ITimelineData } from '../../models';
/**
 * ? Local Imports
 */
import styles from './Item.style';

interface ItemProps {
  style?: StyleProp<ViewStyle>;
  data: ITimeline;
  list: ITimelineData[];
  isLastMember: boolean;
  cardStyle?: StyleProp<ViewStyle>;
  cardTitleTextStyle?: StyleProp<TextStyle>;
  cardSubtitleTextStyle?: StyleProp<TextStyle>;
}

const Item: React.FC<ItemProps> = ({
  style,
  data,
  list,
  isLastMember,
  cardStyle,
  cardTitleTextStyle,
  cardSubtitleTextStyle,
  ...rest
}) => {
  const renderItem = (item: ITimelineData, index: number) => {
    return (
      <Card
        {...rest}
        key={index}
        isCard
        data={item}
        style={cardStyle}
        titleTextStyle={cardTitleTextStyle}
        subtitleTextStyle={cardSubtitleTextStyle}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      <PointLine
        {...rest}
        date={data.date}
        length={list.length}
        isLastMember={isLastMember}
      />
      <View style={styles.insideListContainer}>
        <FlatList
          data={list}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Item;
