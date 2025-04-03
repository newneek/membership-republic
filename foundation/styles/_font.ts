import { StyleSheet } from "react-native";
import Variables from "./Variables";

// TODO: Deprecated
const backwardCompatibility = StyleSheet.create({
  fontSize5XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize5XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize5XLarge,
  },
  fontSize4XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize4XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize4XLarge,
  },
  fontSize3XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize3XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize3XLarge,
  },
  fontSize2XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize2XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize2XLarge,
  },
  fontSizeXLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeXLarge,
  },
  fontSizeLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeLarge,
  },
  fontSizeMedium: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeMedium,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeMedium,
  },
  fontSizeSmall: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeSmall,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeSmall,
  },
  fontSizeXSmall: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXSmall,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeXSmall,
  },
});

const fontFamily = StyleSheet.create({
  sans: {
    fontFamily: "Pretendard",
  },
});

const size = StyleSheet.create({
  xxxxxlarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize5XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize5XLarge,
  },
  xxxxlarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize4XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize4XLarge,
  },
  xxxlarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize3XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize3XLarge,
  },
  xxlarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize2XLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSize2XLarge,
  },
  xlarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeXLarge,
  },
  large: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeLarge,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeLarge,
  },
  medium: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeMedium,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeMedium,
  },
  small: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeSmall,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeSmall,
  },
  xsmall: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXSmall,
    lineHeight:
      Variables.baseFontSize *
      Variables.baseLineHeight *
      Variables.fontSizes.fontSizeXSmall,
  },
});

const weight = StyleSheet.create({
  bold: { fontWeight: "bold" },
  normal: { fontWeight: "normal" },
  "100": { fontWeight: "100" },
  "200": { fontWeight: "200" },
  "300": { fontWeight: "300" },
  "400": { fontWeight: "400" },
  "500": { fontWeight: "500" },
  "600": { fontWeight: "600" },
  "700": { fontWeight: "700" },
  "800": { fontWeight: "800" },
  "900": { fontWeight: "900" },
});

export default { ...backwardCompatibility, ...fontFamily, size, weight };
