import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './variables';

const paddingDirections = {
  h: 'height',
  w: 'width',
};

const keyValuePairs = [];

_.forEach(paddingDirections, (dirValue, dirKey) => {
  keyValuePairs.push(
    ..._.map(Variables.sizes, (value, key) => {
      return [`${dirKey}${key}`, { [dirValue]: value }];
    }),
  );
});

export default StyleSheet.create(_.fromPairs(keyValuePairs));
