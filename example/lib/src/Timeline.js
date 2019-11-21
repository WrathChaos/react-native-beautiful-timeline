import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, FlatList } from "react-native";
import Item from "./components/Item/Item";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

const Timeline = props => {
  const { example } = props;
  const { data } = props;
  renderItem = list => {
    const { item, index } = list;
    const isLastMember = index === data.length - 1;
    return <Item key={index} index={index} isLastMember={isLastMember} />;
  };

  return (
    <SafeAreaView style={{ margin: 16, backgroundColor: "#fdfdfd" }}>
      <FlatList
        data={data}
        style={{ width: ScreenWidth, paddingTop: 32 }}
        contentContainerStyle={{ alignItems: "center" }}
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
