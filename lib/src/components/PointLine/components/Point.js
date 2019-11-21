import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { _innerContainer, _outerContainer } from "./Point.style";

const Point = props => {
  const {
    pointShadowColor,
    pointBackgroundColor,
    outerContainerBorderColor,
    outerContainerBackgroundColor
  } = props;
  return (
    <View style={_innerContainer(pointBackgroundColor, pointShadowColor)}>
      <View
        style={_outerContainer(
          outerContainerBorderColor,
          outerContainerBackgroundColor
        )}
      />
    </View>
  );
};

Point.propTypes = {
  pointShadowColor: PropTypes.string,
  pointBackgroundColor: PropTypes.string,
  outerContainerBorderColor: PropTypes.string,
  outerContainerBackgroundColor: PropTypes.string
};

Point.defaultProps = {
  pointShadowColor: "#984cf8",
  pointBackgroundColor: "#984cf8",
  outerContainerBorderColor: "rgba(152, 76, 248, 0.1)",
  outerContainerBackgroundColor: "rgba(152, 76, 248, 0.05)"
};

export default Point;
