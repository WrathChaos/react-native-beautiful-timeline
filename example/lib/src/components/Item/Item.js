import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Dash from "react-native-dash";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

const Item = props => {
  const { data, isLastMember } = props;
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: ScreenWidth,
        borderBottomColor: "#DDE2E2"
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            marginTop: 8,
            marginRight: 12,
            alignItems: "center"
          }}
        >
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
            marginTop: 12,
            marginLeft: 12
          }}
        >
          {!isLastMember && (
            <Dash
              dashGap={7}
              dashColor="#e3e3e3"
              style={{
                width: 1,
                height: 100,
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
      <View
        style={{
          flexDirection: "column",
          width: "70%",
          height: null,
          marginLeft: 12,
          alignSelf: "baseline"
        }}
      >
        <View
          style={{
            paddingBottom: 12,
            paddingTop: 12,
            marginLeft: 16,
            marginTop: -5,
            borderRadius: 12,
            flexDirection: "row",
            backgroundColor: "#fff",
            shadowRadius: 7,
            shadowOpacity: 0.05,
            shadowColor: "##f6f7f8",
            shadowOffset: {
              width: 0,
              height: 5
            }
          }}
        >
          <View style={{ marginLeft: 16, width: "85%" }}>
            <Text
              style={{
                fontSize: 14,
                color: "#556084",
                fontWeight: "bold",
                fontFamily: "Alata-Regular"
              }}
            >
              Dribble Warsaw Meetup
            </Text>
            <Text
              numberOfLines={2}
              style={{
                color: "#8c93ab",
                fontSize: 12,
                fontWeight: "600",
                marginTop: 8,
                fontFamily: "Alata-Regular"
              }}
            >
              Etiam volutpat ligula metus, quis.
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: "#ccc",
            fontSize: 10,
            fontWeight: "100",
            marginTop: 8,
            marginLeft: 32,
            fontFamily: "Alata-Regular"
          }}
        >
          Tue 16, 19:09
        </Text>
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
