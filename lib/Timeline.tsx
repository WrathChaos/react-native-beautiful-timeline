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
}

const Timeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle,
  cardStyle,
  cardTitleTextStyle,
  cardSubtitleTextStyle,
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
