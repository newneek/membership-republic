import { StyleSheet } from 'react-native';
import Variables from './variables';

const styles = StyleSheet.create({
  rounded0: {
    borderRadius: 0,
  },

  rounded: {
    borderRadius: Variables.borderRadius,
  },

  small: {
    borderRadius: Variables.borderRadiusSmall,
  },

  large: {
    borderRadius: Variables.borderRadiusLarge,
  },

  top: {
    borderTopLeftRadius: Variables.borderRadius,
    borderTopRightRadius: Variables.borderRadius,
  },

  bottom: {
    borderBottomLeftRadius: Variables.borderRadius,
    borderBottomRightRadius: Variables.borderRadius,
  },

  left: {
    borderTopLeftRadius: Variables.borderRadius,
    borderBottomLeftRadius: Variables.borderRadius,
  },

  right: {
    borderTopRightRadius: Variables.borderRadius,
    borderBottomRightRadius: Variables.borderRadius,
  },

  circle: {
    borderRadius: Variables.roundedCircle,
  },

  pill: {
    borderRadius: Variables.roundedPill,
  },
});

const { rounded, ...roundedExcluded } = styles;

export default { ...rounded, ...roundedExcluded };
