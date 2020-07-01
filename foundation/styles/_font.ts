import { StyleSheet } from 'react-native';
import Variables from './variables';

export default StyleSheet.create({
  fontSize5XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize5XLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSize5XLarge,
  },
  fontSize4XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize4XLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSize4XLarge,
  },
  fontSize3XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize3XLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSize3XLarge,
  },
  fontSize2XLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSize2XLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSize2XLarge,
  },
  fontSizeXLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSizeXLarge,
  },
  fontSizeLarge: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeLarge,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSizeLarge,
  },
  fontSizeMedium: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeMedium,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSizeMedium,
  },
  fontSizeSmall: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeSmall,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSizeSmall,
  },
  fontSizeXSmall: {
    fontSize: Variables.baseFontSize * Variables.fontSizes.fontSizeXSmall,
    lineHeight:
      Variables.baseFontSize * Variables.baseLineHeight * Variables.fontSizes.fontSizeXSmall,
  },
});
