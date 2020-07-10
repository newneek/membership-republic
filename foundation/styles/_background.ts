import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

const styles = StyleSheet.create({
  ..._.mapValues(Variables.themeColors, value => ({ backgroundColor: value })),
});

export default { ...styles };
