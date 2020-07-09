import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './variables';

// TODO: Deprecated
const backwardCompatibility = StyleSheet.create({
  // border
  border: {
    borderWidth: Variables.borderWidth,
    borderColor: Variables.borderColor,
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
    borderLeftWidth: Variables.borderWidth,
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
    borderLeftWidth: 0,
  },

  borderWhite: {
    borderColor: Variables.white,
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

  roundedPill: {
    borderRadius: Variables.roundedPill,
  },

  // TODO : 수치가 50%로 적용되어야 하는데 제대로 적용되고 있는지 확인해봐야 한다
  //   제대로 작동하지 않고있다
  //   .rounded-circle {
  //     border-radius: 50%;
  //   }
  // roundedCircle: {
  //   borderRadius: Variables.roundedCircle,
  // },
});

const styles = StyleSheet.create({
  border: {
    borderWidth: Variables.borderWidth,
    borderColor: Variables.borderColor,
  },

  border0: {
    borderWidth: Variables.borderWidth,
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
    borderLeftWidth: Variables.borderWidth,
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
    borderLeftWidth: 0,
  },

  white: {
    borderColor: Variables.white,
  },
});

const color = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({ borderColor: value })),
});

const { border, ...borderExcluded } = styles;

export default { ...backwardCompatibility, ...border, ...borderExcluded, color };
