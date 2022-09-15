import React from "react";
import { SafeAreaView, FlatList, StyleProp, ViewStyle } from "react-native";
import Item from "./components/Item/Item";
import { ITimeline } from "./models";
/**
 * ? Local Imports
 */
import styles from "./Timeline.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface TimelineProps {
  style?: CustomStyleProp;
  data: ITimeline[];
}

const Timeline: React.FC<TimelineProps> = ({ data, style, ...rest }) => {
  const renderItem = (item: any, index: number) => {
    const isLastMember = index === data.length - 1;
    return (
      <Item
        {...rest}
        data={item}
        list={item.data}
        isLastMember={isLastMember}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <FlatList
        data={data}
        style={styles.listStyle}
        contentInset={styles.contentInset}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </SafeAreaView>
  );
};

export default Timeline;
