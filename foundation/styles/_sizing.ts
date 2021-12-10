import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

/* TODO: 2020.07.24 Typescript에서 object spread export 를 지원하지 않음
 * 우선 인터페이스 수동 작성하여 자동 완성 동작하도록 처리
 */

interface Sizing {
  h10: { height: string };
  h15: { height: string };
  h25: { height: string };
  h31: { height: string };
  h35: { height: string };
  h50: { height: string };
  h66: { height: string };
  h75: { height: string };
  h100: { height: string };
  hauto: { height: string };

  w10: { width: string };
  w15: { width: string };
  w25: { width: string };
  w31: { width: string };
  w33: { width: string };
  w35: { width: string };
  w50: { width: string };
  w66: { width: string };
  w75: { width: string };
  w100: { width: string };
  wauto: { width: string };

  [x: string]: { height?: string; width?: string };
}

const sizingElements = {
  h: 'height',
  w: 'width',
};

const styles = _.merge(
  {},
  ..._.map(sizingElements, (sizingKey, sizingPrefix) =>
    _.mapKeys(
      _.mapValues(Variables.sizes, value => ({ [sizingKey]: value })),
      (_value, key) => `${sizingPrefix}${key}`,
    ),
  ),
) as Sizing;

export default StyleSheet.create(styles);
