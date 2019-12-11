export const _dateStyle = (color, fontFamily, isCard) => ({
  color,
  fontFamily,
  fontSize: 10,
  marginLeft: 32,
  marginTop: isCard ? 8 : 0
});

export const _subtitleStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontSize: 12,
  marginTop: 8,
  fontWeight: "600"
});

export const _titleStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontSize: 14,
  fontWeight: "bold"
});

export const _shadowStyle = (isCard, shadowColor) => {
  return isCard && {
      backgroundColor:'transparent',
      shadowColor,
      shadowRadius: 7,
      shadowOpacity: 0.09,
      shadowOffset: {
        width: 0,
        height: 3
      }
  }
}

export const _cardContainer = (isCard, shadowColor, backgroundColor) => {
  return [
    {
      marginTop: -5,
      paddingTop: 12,
      marginLeft: 24,
      borderRadius: 12,
      flexDirection: "row",
      paddingBottom: isCard ? 12 : 6,
    },
    isCard && {
      shadowColor,
      backgroundColor,
      shadowRadius: 7,
      shadowOpacity: 0.05,
      shadowOffset: {
        width: 0,
        height: 3
      }
    }
  ];
};

export default {
  container: {
    width: "85%",
    height: null,
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 3,
    borderRadius:322,
    alignSelf: "baseline",
    flexDirection: "column",
  },
  cardContainerGlue: {
    width: "100%",
    paddingLeft: 16
  }
};
