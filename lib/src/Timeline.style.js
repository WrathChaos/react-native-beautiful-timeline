import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const _container = backgroundColor => ({
  margin: 16,
  height: "100%",
  backgroundColor
});

export default {
  listStyle: {
    width: ScreenWidth,
    paddingTop: 24,
  },
  contentContainerStyle: {
    alignItems: "center"
  }
};
