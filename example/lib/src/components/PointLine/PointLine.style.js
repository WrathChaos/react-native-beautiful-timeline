export const _monthTextStyle = (color, fontFamily) => ({
  color,
  fontFamily
});

export const _dayTextStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontWeight: "700"
});

export const _dashStyle = length => ({
  width: 1,
  height: 110 * length,
  flexDirection: "column"
});

export default {
  container: {
    flexDirection: "row",
    marginLeft: 24
  },
  containerGlue: {
    marginTop: -7,
    marginRight: 12,
    alignItems: "center",
    flexDirection: "column"
  },
  dividerStyle: {
    paddingTop: 12,
    marginLeft: 12
  }
};
