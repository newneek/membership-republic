import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

const paddingDirections = {
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
};

const marginDirections = {
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
};

const keyValuePairs = [];

_.forEach(paddingDirections, (dirValue, dirKey) => {
  keyValuePairs.push(
    ..._.map(Variables.spacers, (value, key) => {
      return [`${dirKey}${key}`, { [dirValue]: value }];
    }),
  );
});

_.forEach(marginDirections, (dirValue, dirKey) => {
  keyValuePairs.push(
    ..._.map(Variables.spacers, (value, key) => {
      return [`${dirKey}${key}`, { [dirValue]: value }];
    }),
  );
});

// Negative margins (e.g., where `.mbn1` is negative version of `.mb1`)
_.forEach(marginDirections, (dirValue, dirKey) => {
  keyValuePairs.push(
    ..._.map(Variables.spacers, (value, key) => {
      return [`${dirKey}n${key}`, { [dirValue]: -value }];
    }),
  );
});

// Some special margin utils
_.forEach(marginDirections, (dirValue, dirKey) => {
  keyValuePairs.push([`${dirKey}Auto`, { [dirValue]: 'auto' }]);
});

export default StyleSheet.create(_.fromPairs(keyValuePairs) as { [key: string]: object });
