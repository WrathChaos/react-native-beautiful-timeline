import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const _container = backgroundColor => ({
  marginLeft: 16,
  height: "100%",
  backgroundColor,
  marginRight: 16
});

export default {
  listStyle: {
    width: ScreenWidth,
    maxHeight: ScreenHeight / 2 - 32
  },
  contentContainerStyle: {
    alignItems: "center"
  }
};
