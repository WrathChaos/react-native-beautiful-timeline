import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, FlatList } from "react-native";
import Item from "./components/Item/Item";

const Timeline = props => {
  const { example } = props;
  const { data } = props;
  renderItem = list => {
    const { item, index } = list;
    const isLastMember = index === data.length - 1;
    return <Item key={index} index={index} isLastMember={isLastMember} />;
  };

  return (
    <SafeAreaView style={{ margin: 16 }}>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        data={data}
        renderItem={renderItem.bind(this)}
      />
    </SafeAreaView>
  );
};

Timeline.propTypes = {
  data: PropTypes.array
};

Timeline.defaultProps = {
  data: [1, 2, 3, 4, 5]
};

export default Timeline;
