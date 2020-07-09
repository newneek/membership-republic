import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './variables';

const color = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({ color: value })),
});

export default { color };
