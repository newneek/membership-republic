import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

const keyValuePairs = [];

keyValuePairs.push(
  ..._.map(Variables.themeColors, (value, key) => {
    const upperKey = _.upperFirst(key);
    return [`text${upperKey}`, { color: value }];
  }),
);

keyValuePairs.push(
  ..._.map(Variables.themeColors, (value, key) => {
    const upperKey = _.upperFirst(key);
    return [`bg${upperKey}`, { backgroundColor: value }];
  }),
);

keyValuePairs.push(
  ..._.map(Variables.themeColors, (value, key) => {
    const upperKey = _.upperFirst(key);
    return [`border${upperKey}`, { borderColor: value }];
  }),
);

keyValuePairs.push([`textWhite`, { color: Variables.white }]);
keyValuePairs.push([`textWhite50`, { color: `rgba(255, 255, 255, 0.5)` }]);
keyValuePairs.push([`textBlack50`, { color: `rgba(0, 0, 0, 0.5)` }]);

// TODO: Deprecated
export default StyleSheet.create(_.fromPairs(keyValuePairs) as { [key: string]: object });
