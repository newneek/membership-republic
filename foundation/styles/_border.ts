import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

// TODO: Deprecated
const backwardCompatibility = StyleSheet.create({
  // border
  border: {
    borderWidth: Variables.borderWidth,
    borderColor: Variables.borderColor,
    borderTopColor: Variables.borderColor,
    borderLeftColor: Variables.borderColor,
    borderRightColor: Variables.borderColor,
    borderBottomColor: Variables.borderColor,
  },

  borderTop: {
    borderTopWidth: Variables.borderWidth,
    borderTopColor: Variables.borderColor,
  },

  borderBottom: {
    borderBottomWidth: Variables.borderWidth,
    borderBottomColor: Variables.borderColor,
  },

  borderLeft: {
    borderLeftWidth: Variables.borderWidth,
    borderLeftColor: Variables.borderColor,
  },

  borderRight: {
    borderRightWidth: Variables.borderWidth,
    borderRightColor: Variables.borderColor,
  },

  border0: {
    borderWidth: Variables.borderWidth,
  },

  borderTop0: {
    borderTopWidth: 0,
  },

  borderBottom0: {
    borderBottomWidth: 0,
  },

  borderLeft0: {
    borderLeftWidth: 0,
  },

  borderRight0: {
    borderRightWidth: 0,
  },

  borderWhite: {
    borderColor: Variables.white,
    borderTopColor: Variables.white,
    borderLeftColor: Variables.white,
    borderRightColor: Variables.white,
    borderBottomColor: Variables.white,
  },

  // BorderRadius

  rounded0: {
    borderRadius: 0,
  },

  rounded: {
    borderRadius: Variables.borderRadius,
  },

  roundedSmall: {
    borderRadius: Variables.borderRadiusSmall,
  },

  roundedLarge: {
    borderRadius: Variables.borderRadiusLarge,
  },

  roundedTop: {
    borderTopLeftRadius: Variables.borderRadius,
    borderTopRightRadius: Variables.borderRadius,
  },

  roundedBottom: {
    borderBottomLeftRadius: Variables.borderRadius,
    borderBottomRightRadius: Variables.borderRadius,
  },

  roundedLeft: {
    borderTopLeftRadius: Variables.borderRadius,
    borderBottomLeftRadius: Variables.borderRadius,
  },

  roundedRight: {
    borderTopRightRadius: Variables.borderRadius,
    borderBottomRightRadius: Variables.borderRadius,
  },

  roundedCircle: {
    borderRadius: Variables.roundedCircle,
  },

  roundedPill: {
    borderRadius: Variables.roundedPill,
  },
});

const styles = StyleSheet.create({
  border0: {
    borderWidth: Variables.borderWidth,
  },

  border1: {
    borderWidth: Variables.borderWidth,
    borderColor: Variables.borderColor,
    borderTopColor: Variables.borderColor,
    borderLeftColor: Variables.borderColor,
    borderRightColor: Variables.borderColor,
    borderBottomColor: Variables.borderColor,
  },

  borderAll: {
    borderWidth: Variables.borderWidth,
    borderColor: Variables.borderColor,
    borderTopColor: Variables.borderColor,
    borderLeftColor: Variables.borderColor,
    borderRightColor: Variables.borderColor,
    borderBottomColor: Variables.borderColor,
  },

  top: {
    borderTopWidth: Variables.borderWidth,
    borderTopColor: Variables.borderColor,
  },

  bottom: {
    borderBottomWidth: Variables.borderWidth,
    borderBottomColor: Variables.borderColor,
  },

  left: {
    borderLeftWidth: Variables.borderWidth,
    borderLeftColor: Variables.borderColor,
  },

  right: {
    borderRightWidth: Variables.borderWidth,
    borderRightColor: Variables.borderColor,
  },

  top0: {
    borderTopWidth: 0,
  },

  bottom0: {
    borderBottomWidth: 0,
  },

  left0: {
    borderLeftWidth: 0,
  },

  right0: {
    borderRightWidth: 0,
  },

  white: {
    borderColor: Variables.white,
  },
});

const color = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({
    borderColor: value,
    borderTopColor: value,
    borderLeftColor: value,
    borderRightColor: value,
    borderBottomColor: value,
  })),
});

export default { ...backwardCompatibility, ...styles, color };
