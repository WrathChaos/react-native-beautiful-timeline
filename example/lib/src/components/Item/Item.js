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
          marginLeft: 16,
          width: "70%",
          minHeight: 75,
          flexDirection: "row"
        }}
      >
        <View style={{ marginTop: 6, marginLeft: 16 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#556084",
              fontWeight: "700",
              fontFamily: "Alata-Regular"
            }}
          >
            Dribble Warsaw Meetup
          </Text>
          <Text
            style={{
              color: "#8c93ab",
              fontSize: 12,
              fontWeight: "600",
              marginTop: 8,
              fontFamily: "Alata-Regular"
            }}
          >
            6 PM - 0 PM. Plac Europeski 1
          </Text>
          <Text
            style={{
              color: "#8c93ab",
              fontSize: 12,
              fontWeight: "300",
              marginTop: 8,
              fontFamily: "Alata-Regular"
            }}
          >
            Tue 16, 15:08
          </Text>
        </View>
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
