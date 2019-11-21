import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const Card = props => {
  const { example, isCard } = props;
  return (
    <View
      style={{
        width: "80%",
        height: null,
        marginLeft: 12,
        paddingTop: 12,
        paddingBottom: 3,
        alignSelf: "baseline",
        flexDirection: "column"
      }}
    >
      <View
        style={[
          {
            marginTop: -5,
            paddingTop: 12,
            marginLeft: 16,
            borderRadius: 12,
            flexDirection: "row",
            paddingBottom: isCard ? 12 : 6
          },
          isCard && {
            shadowRadius: 7,
            shadowOpacity: 0.05,
            backgroundColor: "#fff",
            shadowColor: "##f6f7f8",
            shadowOffset: {
              width: 0,
              height: 3
            }
          }
        ]}
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
          marginTop: isCard ? 8 : 0,
          marginLeft: 32,
          fontWeight: "100",
          fontFamily: "Alata-Regular"
        }}
      >
        Tue 16, 19:09
      </Text>
    </View>
  );
};

Card.propTypes = {
  example: PropTypes.number
};

Card.defaultProps = {
  example: 5
};

export default Card;
