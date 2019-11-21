import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import moment from "moment";
import styles, {
  _cardContainer,
  _cardShadowContainer,
  _titleStyle,
  _subtitleStyle,
  _dateStyle
} from "./Card.style";

const Card = props => {
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
    dateFontFamily,
    titleFontFamily,
    subtitleFontColor,
    subtitleFontFamily,
    cardBackgroundColor
  } = props;
  return (
    <View style={styles.container}>
      <View style={_cardContainer(isCard, shadowColor, cardBackgroundColor)}>
        <View style={styles.cardContainerGlue}>
          <Text
            numberOfLines={1}
            style={titleStyle || _titleStyle(titleFontColor, titleFontFamily)}
          >
            {data.title}
          </Text>
          <Text
            numberOfLines={2}
            style={
              subtitleStyle ||
              _subtitleStyle(subtitleFontColor, subtitleFontFamily)
            }
          >
            {data.subtitle}
          </Text>
        </View>
      </View>
      <Text
        numberOfLines={1}
        style={dateStyle || _dateStyle(dateFontColor, dateFontFamily, isCard)}
      >
        {moment(data.date).format("DD ddd, HH:mm")}
      </Text>
    </View>
  );
};

Card.propTypes = {
  date: PropTypes.string,
  isCard: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shadowColor: PropTypes.string,
  dateFontColor: PropTypes.string,
  dateFontFamily: PropTypes.string,
  titleFontColor: PropTypes.string,
  subtitleFontColor: PropTypes.string,
  subtitleFontFamily: PropTypes.string,
  cardBackgroundColor: PropTypes.string
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
  subtitle: "Etiam volutpat ligula metus, quis."
};

export default Card;
