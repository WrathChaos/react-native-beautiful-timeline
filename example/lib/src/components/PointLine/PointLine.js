import React from "react";
import PropTypes from "prop-types";
import Dash from "react-native-dash";
import styles from "./PointLine.style";
import { Text, View } from "react-native";

const PointLine = props => {
  const { isLastMember, length } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        <Text
          style={{
            color: "#984cf8",
            fontWeight: "700",
            fontFamily: "Alata-Regular"
          }}
        >
          16
        </Text>
        <Text style={{ color: "#ded9e6", fontFamily: "Alata-Regular" }}>
          TUE
        </Text>
      </View>
      <View
        style={{
          paddingTop: 12,
          marginLeft: 12
        }}
      >
        {!isLastMember && (
          <Dash
            dashGap={7}
            dashColor="#e3e3e3"
            style={{
              width: 1,
              height: 110 * length,
              flexDirection: "column"
            }}
          />
        )}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: -4,
            backgroundColor: "#984cf8",
            borderRadius: 30,
            height: 10,
            width: 10,
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: "#984cf8",
            shadowOffset: {
              width: 0,
              height: 3
            },
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderRadius: 16,
              borderColor: "rgba(152, 76, 248, 0.1)",
              backgroundColor: "rgba(152, 76, 248, 0.05)"
            }}
          />
        </View>
      </View>
    </View>
  );
};

PointLine.propTypes = {
  example: PropTypes.number
};

PointLine.defaultProps = {
  example: 5
};

export default PointLine;
