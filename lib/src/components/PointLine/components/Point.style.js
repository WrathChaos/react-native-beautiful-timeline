export const _innerContainer = (backgroundColor, shadowColor) => [
  {
    top: 0,
    left: -4,
    width: 10,
    height: 10,
    backgroundColor,
    borderRadius: 30,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  {
    shadowColor,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
];

export const _outerContainer = (borderColor, backgroundColor) => ({
  width: 20,
  height: 20,
  borderColor,
  borderWidth: 1,
  backgroundColor,
  borderRadius: 16
});
