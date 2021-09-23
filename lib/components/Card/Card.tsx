import * as React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import moment from "moment";
import Androw from "react-native-androw";
import { isAndroid } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import styles, {
  _cardContainer,
  _titleStyle,
  _subtitleStyle,
  _dateStyle,
  _shadowStyle,
} from "./Card.style";

const Card = (props) => {
  const {
    data,
    date,
    title,
    isCard,
    subtitle,
    dateStyle,
    titleStyle,
    shadowColor,
    subtitleStyle,
    dateFontColor,
    titleFontColor,
    subtitleFontColor,
    cardBackgroundColor,
  } = props;
  return (
    <Androw
      style={[styles.container, isAndroid && _shadowStyle(isCard, shadowColor)]}
    >
      <Androw style={_cardContainer(isCard, shadowColor, cardBackgroundColor)}>
        <View style={styles.cardContainerGlue}>
          <Text
            numberOfLines={1}
            style={titleStyle || _titleStyle(titleFontColor)}
          >
            {data.title}
          </Text>
          <Text
            numberOfLines={2}
            style={subtitleStyle || _subtitleStyle(subtitleFontColor)}
          >
            {data.subtitle}
          </Text>
        </View>
      </Androw>
      <Text
        numberOfLines={1}
        style={dateStyle || _dateStyle(dateFontColor, isCard)}
      >
        {moment(data.date).format("DD ddd, HH:mm")}
      </Text>
    </Androw>
  );
};

Card.propTypes = {
  date: PropTypes.string,
  isCard: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shadowColor: PropTypes.string,
  dateFontColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  subtitleFontColor: PropTypes.string,
  subtitleFontFamily: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
};

Card.defaultProps = {
  isCard: true,
  shadowColor: "#000",
  date: "Tue 16, 19:09",
  dateFontColor: "#ccc",
  titleFontColor: "#556084",
  cardBackgroundColor: "#fff",
  subtitleFontColor: "#8c93ab",
  title: "React Native Beautiful Timeline",
  subtitle: "Etiam volutpat ligula metus, quis.",
};

export default Card;
