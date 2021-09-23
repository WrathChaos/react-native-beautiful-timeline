import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  dividerStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    marginLeft: 24,
  },
  containerGlue: {
    marginTop: -7,
    marginRight: 12,
    alignItems: "center",
    flexDirection: "column",
  },
  dividerStyle: {
    paddingTop: 12,
    marginLeft: 12,
  },
});

export const _monthTextStyle = (color, fontFamily) => ({
  color,
  fontFamily,
});

export const _dayTextStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontWeight: "700",
});

export const _dashStyle = (length) => ({
  width: 1,
  height: 110 * length,
  flexDirection: "column",
});
