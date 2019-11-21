import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import Card from "../Card/Card";
import PointLine from "../PointLine/PointLine";

const Item = props => {
  const { data, isLastMember } = props;
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
      <PointLine isLastMember={isLastMember} length={3} />
      <View style={{ flexDirection: "column" }}>
        <Card isCard />
        <Card />
        <Card />
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
