import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './variables';

const color = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({ color: value })),
  white50: { color: 'rgba(255, 255, 255, 0.5)' },
  black50: { color: 'rgba(0, 0, 0, 0.5)' },
});

export default { color };
