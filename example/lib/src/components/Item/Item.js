import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import Card from "../Card/Card";
import PointLine from "../PointLine/PointLine";

const dummyListData = [1, 2];

const Item = props => {
  const { data, isLastMember } = props;

  renderItem = listData => {
    const { item, index } = listData;
    return <Card isCard data={item} />;
  };

  return (
    <View
      style={{
        width: ScreenWidth,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderBottomColor: "#DDE2E2"
      }}
    >
      <PointLine isLastMember={isLastMember} length={dummyListData.length} />
      <View style={{ flexDirection: "column", marginLeft: 16, marginTop: -24 }}>
        <FlatList data={dummyListData} renderItem={renderItem.bind(this)} />
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.object
};

Item.defaultProps = {
  data: {}
};

export default Item;
