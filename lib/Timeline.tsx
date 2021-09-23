import * as React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, FlatList } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _container } from "./Timeline.style";
import Item from "./components/Item/Item";

const Timeline = (props: any) => {
  const { data, backgroundColor } = props;
  const renderItem = (item: any, index: number) => {
    const isLastMember = index === data.length - 1;
    return (
      <Item
        {...props}
        data={item}
        list={item.data}
        isLastMember={isLastMember}
      />
    );
  };

  return (
    <SafeAreaView style={_container(backgroundColor)}>
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

Timeline.propTypes = {
  data: PropTypes.array,
  backgroundColor: PropTypes.string,
};

Timeline.defaultProps = {
  data: [1, 2, 3, 4, 5],
  backgroundColor: "#fdfdfd",
};

export default Timeline;
