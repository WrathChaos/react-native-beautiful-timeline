import {
  ScreenWidth,
  isAndroid,
  ScreenHeight
} from "@freakycoder/react-native-helpers";

export const _container = backgroundColor => ({
  marginLeft: 16,
  marginRight: 16,
  height: "100%",
  backgroundColor
});

export default {
  listStyle: {
    width: ScreenWidth,
    maxHeight: isAndroid ? ScreenHeight / 2 - 32 : null
  },
  contentContainerStyle: {
    alignItems: "center"
  }
};
