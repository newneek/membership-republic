import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

/* TODO: 2020.07.24 Typescript에서 object spread export 를 지원하지 않음
 * 우선 인터페이스 수동 작성하여 자동 완성 동작하도록 처리
 */

interface Spacing {
  p0: { padding: number };
  p1: { padding: number };
  p2: { padding: number };
  p3: { padding: number };
  p4: { padding: number };
  p5: { padding: number };
  p6: { padding: number };
  p7: { padding: number };
  p8: { padding: number };
  p9: { padding: number };
  px0: { paddingHorizontal: number };
  px1: { paddingHorizontal: number };
  px2: { paddingHorizontal: number };
  px3: { paddingHorizontal: number };
  px4: { paddingHorizontal: number };
  px5: { paddingHorizontal: number };
  px6: { paddingHorizontal: number };
  px7: { paddingHorizontal: number };
  px8: { paddingHorizontal: number };
  px9: { paddingHorizontal: number };
  py0: { paddingVertical: number };
  py1: { paddingVertical: number };
  py2: { paddingVertical: number };
  py3: { paddingVertical: number };
  py4: { paddingVertical: number };
  py5: { paddingVertical: number };
  py6: { paddingVertical: number };
  py7: { paddingVertical: number };
  py8: { paddingVertical: number };
  py9: { paddingVertical: number };
  pt0: { paddingTop: number };
  pt1: { paddingTop: number };
  pt2: { paddingTop: number };
  pt3: { paddingTop: number };
  pt4: { paddingTop: number };
  pt5: { paddingTop: number };
  pt6: { paddingTop: number };
  pt7: { paddingTop: number };
  pt8: { paddingTop: number };
  pt9: { paddingTop: number };
  pb0: { paddingBottom: number };
  pb1: { paddingBottom: number };
  pb2: { paddingBottom: number };
  pb3: { paddingBottom: number };
  pb4: { paddingBottom: number };
  pb5: { paddingBottom: number };
  pb6: { paddingBottom: number };
  pb7: { paddingBottom: number };
  pb8: { paddingBottom: number };
  pb9: { paddingBottom: number };
  pl0: { paddingLeft: number };
  pl1: { paddingLeft: number };
  pl2: { paddingLeft: number };
  pl3: { paddingLeft: number };
  pl4: { paddingLeft: number };
  pl5: { paddingLeft: number };
  pl6: { paddingLeft: number };
  pl7: { paddingLeft: number };
  pl8: { paddingLeft: number };
  pl9: { paddingLeft: number };
  pr0: { paddingRight: number };
  pr1: { paddingRight: number };
  pr2: { paddingRight: number };
  pr3: { paddingRight: number };
  pr4: { paddingRight: number };
  pr5: { paddingRight: number };
  pr6: { paddingRight: number };
  pr7: { paddingRight: number };
  pr8: { paddingRight: number };
  pr9: { paddingRight: number };

  m0: { margin: number };
  m1: { margin: number };
  m2: { margin: number };
  m3: { margin: number };
  m4: { margin: number };
  m5: { margin: number };
  m6: { margin: number };
  m7: { margin: number };
  m8: { margin: number };
  m9: { margin: number };
  mx0: { marginHorizontal: number };
  mx1: { marginHorizontal: number };
  mx2: { marginHorizontal: number };
  mx3: { marginHorizontal: number };
  mx4: { marginHorizontal: number };
  mx5: { marginHorizontal: number };
  mx6: { marginHorizontal: number };
  mx7: { marginHorizontal: number };
  mx8: { marginHorizontal: number };
  mx9: { marginHorizontal: number };
  my0: { marginVertical: number };
  my1: { marginVertical: number };
  my2: { marginVertical: number };
  my3: { marginVertical: number };
  my4: { marginVertical: number };
  my5: { marginVertical: number };
  my6: { marginVertical: number };
  my7: { marginVertical: number };
  my8: { marginVertical: number };
  my9: { marginVertical: number };
  mt0: { marginTop: number };
  mt1: { marginTop: number };
  mt2: { marginTop: number };
  mt3: { marginTop: number };
  mt4: { marginTop: number };
  mt5: { marginTop: number };
  mt6: { marginTop: number };
  mt7: { marginTop: number };
  mt8: { marginTop: number };
  mt9: { marginTop: number };
  mb0: { marginBottom: number };
  mb1: { marginBottom: number };
  mb2: { marginBottom: number };
  mb3: { marginBottom: number };
  mb4: { marginBottom: number };
  mb5: { marginBottom: number };
  mb6: { marginBottom: number };
  mb7: { marginBottom: number };
  mb8: { marginBottom: number };
  mb9: { marginBottom: number };
  ml0: { marginLeft: number };
  ml1: { marginLeft: number };
  ml2: { marginLeft: number };
  ml3: { marginLeft: number };
  ml4: { marginLeft: number };
  ml5: { marginLeft: number };
  ml6: { marginLeft: number };
  ml7: { marginLeft: number };
  ml8: { marginLeft: number };
  ml9: { marginLeft: number };
  mr0: { marginRight: number };
  mr1: { marginRight: number };
  mr2: { marginRight: number };
  mr3: { marginRight: number };
  mr4: { marginRight: number };
  mr5: { marginRight: number };
  mr6: { marginRight: number };
  mr7: { marginRight: number };
  mr8: { marginRight: number };
  mr9: { marginRight: number };

  mn0: { margin: number };
  mn1: { margin: number };
  mn2: { margin: number };
  mn3: { margin: number };
  mn4: { margin: number };
  mn5: { margin: number };
  mn6: { margin: number };
  mn7: { margin: number };
  mn8: { margin: number };
  mn9: { margin: number };
  mxn0: { marginHorizontal: number };
  mxn1: { marginHorizontal: number };
  mxn2: { marginHorizontal: number };
  mxn3: { marginHorizontal: number };
  mxn4: { marginHorizontal: number };
  mxn5: { marginHorizontal: number };
  mxn6: { marginHorizontal: number };
  mxn7: { marginHorizontal: number };
  mxn8: { marginHorizontal: number };
  mxn9: { marginHorizontal: number };
  myn0: { marginVertical: number };
  myn1: { marginVertical: number };
  myn2: { marginVertical: number };
  myn3: { marginVertical: number };
  myn4: { marginVertical: number };
  myn5: { marginVertical: number };
  myn6: { marginVertical: number };
  myn7: { marginVertical: number };
  myn8: { marginVertical: number };
  myn9: { marginVertical: number };
  mtn0: { marginTop: number };
  mtn1: { marginTop: number };
  mtn2: { marginTop: number };
  mtn3: { marginTop: number };
  mtn4: { marginTop: number };
  mtn5: { marginTop: number };
  mtn6: { marginTop: number };
  mtn7: { marginTop: number };
  mtn8: { marginTop: number };
  mtn9: { marginTop: number };
  mbn0: { marginBottom: number };
  mbn1: { marginBottom: number };
  mbn2: { marginBottom: number };
  mbn3: { marginBottom: number };
  mbn4: { marginBottom: number };
  mbn5: { marginBottom: number };
  mbn6: { marginBottom: number };
  mbn7: { marginBottom: number };
  mbn8: { marginBottom: number };
  mbn9: { marginBottom: number };
  mln0: { marginLeft: number };
  mln1: { marginLeft: number };
  mln2: { marginLeft: number };
  mln3: { marginLeft: number };
  mln4: { marginLeft: number };
  mln5: { marginLeft: number };
  mln6: { marginLeft: number };
  mln7: { marginLeft: number };
  mln8: { marginLeft: number };
  mln9: { marginLeft: number };
  mrn0: { marginRight: number };
  mrn1: { marginRight: number };
  mrn2: { marginRight: number };
  mrn3: { marginRight: number };
  mrn4: { marginRight: number };
  mrn5: { marginRight: number };
  mrn6: { marginRight: number };
  mrn7: { marginRight: number };
  mrn8: { marginRight: number };
  mrn9: { marginRight: number };

  mauto: { margin: string };
  mxauto: { marginHorizontal: string };
  myauto: { marginVertical: string };
  mtauto: { marginTop: string };
  mbauto: { marginBottom: string };
  mlauto: { marginLeft: string };
  mrauto: { marginRight: string };

  [x: string]: {
    padding?: number | string;
    paddingHorizontal?: number | string;
    paddingVertical?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;

    margin?: number | string;
    marginHorizontal?: number | string;
    marginVertical?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
  };
}

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
  keyValuePairs.push([`${dirKey}auto`, { [dirValue]: 'auto' }]);
  keyValuePairs.push([`${dirKey}Auto`, { [dirValue]: 'auto' }]);
});

const styles = _.fromPairs(keyValuePairs) as Spacing;

export default StyleSheet.create(styles);
