import { ViewStyle, StyleSheet } from "react-native";
import {
  ScreenWidth,
  isAndroid,
  ScreenHeight,
} from "@freakycoder/react-native-helpers";

interface Style {
  listStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
}

export const _container = (backgroundColor) => ({
  marginLeft: 16,
  marginRight: 16,
  height: "100%",
  backgroundColor,
});

export default StyleSheet.create<Style>({
  listStyle: {
    width: ScreenWidth,
    maxHeight: isAndroid ? ScreenHeight / 2 - 32 : 0,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
});
