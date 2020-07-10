import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

const align = StyleSheet.create({
  auto: { textAlign: 'auto' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
  center: { textAlign: 'center' },
  justify: { textAlign: 'justify' },
});

const color = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({ color: value })),
});

const decoration = StyleSheet.create({
  none: { textDecorationLine: 'none' },
  underline: { textDecorationLine: 'underline' },
  solid: { textDecorationStyle: 'solid' },
  double: { textDecorationStyle: 'double' },
  dotted: { textDecorationStyle: 'dotted' },
  dashed: { textDecorationStyle: 'dashed' },
});

export default { ...align, color, decoration };
