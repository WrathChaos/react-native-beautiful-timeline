import { ViewStyle, StyleSheet, Insets } from "react-native";
import {
  ScreenWidth,
  isAndroid,
  ScreenHeight,
} from "@freakycoder/react-native-helpers";

interface Style {
  listStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
  contentInset: Insets;
}

export const _container = (backgroundColor: string): ViewStyle => ({
  marginLeft: 16,
  marginRight: 16,
  height: ScreenHeight,
  backgroundColor: backgroundColor,
});

export default StyleSheet.create<Style>({
  listStyle: {
    paddingTop: 16,
    width: ScreenWidth,
    maxHeight: isAndroid ? ScreenHeight / 2 - 32 : ScreenHeight,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  contentInset: {
    bottom: ScreenHeight * 0.3,
  },
});
