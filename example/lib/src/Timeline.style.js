import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const _container = backgroundColor => ({
  margin: 16,
  backgroundColor
});

export default {
  listStyle: {
    width: ScreenWidth,
    paddingTop: 32
  },
  contentContainerStyle: {
    alignItems: "center"
  }
};
