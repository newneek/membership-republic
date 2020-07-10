import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './variables';

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

export default { ...align, color };
