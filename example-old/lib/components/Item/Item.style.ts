import { ViewStyle, StyleSheet } from "react-native";
import { ScreenWidth, isAndroid } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  insideListContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: ScreenWidth,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: isAndroid ? 16 : 0,
  },
  insideListContainer: {
    marginTop: -24,
    flexDirection: "column",
  },
});
