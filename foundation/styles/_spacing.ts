import _ from 'lodash';
import { StyleSheet } from 'react-native';
import Variables from './Variables';

/* TODO: 2020.07.24 Typescript에서 object spread export 를 지원하지 않음
 * 우선 인터페이스 수동 작성하여 자동 완성 동작하도록 처리
 */

interface Spacing {
  p0: { padding: 0 };
  p1: { padding: 4 };
  p2: { padding: 8 };
  p3: { padding: 12 };
  p4: { padding: 16 };
  p5: { padding: 20 };
  p6: { padding: 24 };
  p7: { padding: 32 };
  p8: { padding: 40 };
  p9: { padding: 48 };
  px0: { paddingHorizontal: 0 };
  px1: { paddingHorizontal: 4 };
  px2: { paddingHorizontal: 8 };
  px3: { paddingHorizontal: 12 };
  px4: { paddingHorizontal: 16 };
  px5: { paddingHorizontal: 20 };
  px6: { paddingHorizontal: 24 };
  px7: { paddingHorizontal: 32 };
  px8: { paddingHorizontal: 40 };
  px9: { paddingHorizontal: 48 };
  py0: { paddingVertical: 0 };
  py1: { paddingVertical: 4 };
  py2: { paddingVertical: 8 };
  py3: { paddingVertical: 12 };
  py4: { paddingVertical: 16 };
  py5: { paddingVertical: 20 };
  py6: { paddingVertical: 24 };
  py7: { paddingVertical: 32 };
  py8: { paddingVertical: 40 };
  py9: { paddingVertical: 48 };
  pt0: { paddingTop: 0 };
  pt1: { paddingTop: 4 };
  pt2: { paddingTop: 8 };
  pt3: { paddingTop: 12 };
  pt4: { paddingTop: 16 };
  pt5: { paddingTop: 20 };
  pt6: { paddingTop: 24 };
  pt7: { paddingTop: 32 };
  pt8: { paddingTop: 40 };
  pt9: { paddingTop: 48 };
  pb0: { paddingBottom: 0 };
  pb1: { paddingBottom: 4 };
  pb2: { paddingBottom: 8 };
  pb3: { paddingBottom: 12 };
  pb4: { paddingBottom: 16 };
  pb5: { paddingBottom: 20 };
  pb6: { paddingBottom: 24 };
  pb7: { paddingBottom: 32 };
  pb8: { paddingBottom: 40 };
  pb9: { paddingBottom: 48 };
  pl0: { paddingLeft: 0 };
  pl1: { paddingLeft: 4 };
  pl2: { paddingLeft: 8 };
  pl3: { paddingLeft: 12 };
  pl4: { paddingLeft: 16 };
  pl5: { paddingLeft: 20 };
  pl6: { paddingLeft: 24 };
  pl7: { paddingLeft: 32 };
  pl8: { paddingLeft: 40 };
  pl9: { paddingLeft: 48 };
  pr0: { paddingRight: 0 };
  pr1: { paddingRight: 4 };
  pr2: { paddingRight: 8 };
  pr3: { paddingRight: 12 };
  pr4: { paddingRight: 16 };
  pr5: { paddingRight: 20 };
  pr6: { paddingRight: 24 };
  pr7: { paddingRight: 32 };
  pr8: { paddingRight: 40 };
  pr9: { paddingRight: 48 };

  m0: { margin: 0 };
  m1: { margin: 4 };
  m2: { margin: 8 };
  m3: { margin: 12 };
  m4: { margin: 16 };
  m5: { margin: 20 };
  m6: { margin: 24 };
  m7: { margin: 32 };
  m8: { margin: 40 };
  m9: { margin: 48 };
  mx0: { marginHorizontal: 0 };
  mx1: { marginHorizontal: 4 };
  mx2: { marginHorizontal: 8 };
  mx3: { marginHorizontal: 12 };
  mx4: { marginHorizontal: 16 };
  mx5: { marginHorizontal: 20 };
  mx6: { marginHorizontal: 24 };
  mx7: { marginHorizontal: 32 };
  mx8: { marginHorizontal: 40 };
  mx9: { marginHorizontal: 48 };
  my0: { marginVertical: 0 };
  my1: { marginVertical: 4 };
  my2: { marginVertical: 8 };
  my3: { marginVertical: 12 };
  my4: { marginVertical: 16 };
  my5: { marginVertical: 20 };
  my6: { marginVertical: 24 };
  my7: { marginVertical: 32 };
  my8: { marginVertical: 40 };
  my9: { marginVertical: 48 };
  mt0: { marginTop: 0 };
  mt1: { marginTop: 4 };
  mt2: { marginTop: 8 };
  mt3: { marginTop: 12 };
  mt4: { marginTop: 16 };
  mt5: { marginTop: 20 };
  mt6: { marginTop: 24 };
  mt7: { marginTop: 32 };
  mt8: { marginTop: 40 };
  mt9: { marginTop: 48 };
  mb0: { marginBottom: 0 };
  mb1: { marginBottom: 4 };
  mb2: { marginBottom: 8 };
  mb3: { marginBottom: 12 };
  mb4: { marginBottom: 16 };
  mb5: { marginBottom: 20 };
  mb6: { marginBottom: 24 };
  mb7: { marginBottom: 32 };
  mb8: { marginBottom: 40 };
  mb9: { marginBottom: 48 };
  ml0: { marginLeft: 0 };
  ml1: { marginLeft: 4 };
  ml2: { marginLeft: 8 };
  ml3: { marginLeft: 12 };
  ml4: { marginLeft: 16 };
  ml5: { marginLeft: 20 };
  ml6: { marginLeft: 24 };
  ml7: { marginLeft: 32 };
  ml8: { marginLeft: 40 };
  ml9: { marginLeft: 48 };
  mr0: { marginRight: 0 };
  mr1: { marginRight: 4 };
  mr2: { marginRight: 8 };
  mr3: { marginRight: 12 };
  mr4: { marginRight: 16 };
  mr5: { marginRight: 20 };
  mr6: { marginRight: 24 };
  mr7: { marginRight: 32 };
  mr8: { marginRight: 40 };
  mr9: { marginRight: 48 };

  mn0: { margin: 0 };
  mn1: { margin: -4 };
  mn2: { margin: -8 };
  mn3: { margin: -12 };
  mn4: { margin: -16 };
  mn5: { margin: -20 };
  mn6: { margin: -24 };
  mn7: { margin: -32 };
  mn8: { margin: -40 };
  mn9: { margin: -48 };
  mxn0: { marginHorizontal: 0 };
  mxn1: { marginHorizontal: -4 };
  mxn2: { marginHorizontal: -8 };
  mxn3: { marginHorizontal: -12 };
  mxn4: { marginHorizontal: -16 };
  mxn5: { marginHorizontal: -20 };
  mxn6: { marginHorizontal: -24 };
  mxn7: { marginHorizontal: -32 };
  mxn8: { marginHorizontal: -40 };
  mxn9: { marginHorizontal: -48 };
  myn0: { marginVertical: 0 };
  myn1: { marginVertical: -4 };
  myn2: { marginVertical: -8 };
  myn3: { marginVertical: -12 };
  myn4: { marginVertical: -16 };
  myn5: { marginVertical: -20 };
  myn6: { marginVertical: -24 };
  myn7: { marginVertical: -32 };
  myn8: { marginVertical: -40 };
  myn9: { marginVertical: -48 };
  mtn0: { marginTop: 0 };
  mtn1: { marginTop: -4 };
  mtn2: { marginTop: -8 };
  mtn3: { marginTop: -12 };
  mtn4: { marginTop: -16 };
  mtn5: { marginTop: -20 };
  mtn6: { marginTop: -24 };
  mtn7: { marginTop: -32 };
  mtn8: { marginTop: -40 };
  mtn9: { marginTop: -48 };
  mbn0: { marginBottom: 0 };
  mbn1: { marginBottom: -4 };
  mbn2: { marginBottom: -8 };
  mbn3: { marginBottom: -12 };
  mbn4: { marginBottom: -16 };
  mbn5: { marginBottom: -20 };
  mbn6: { marginBottom: -24 };
  mbn7: { marginBottom: -32 };
  mbn8: { marginBottom: -40 };
  mbn9: { marginBottom: -48 };
  mln0: { marginLeft: 0 };
  mln1: { marginLeft: -4 };
  mln2: { marginLeft: -8 };
  mln3: { marginLeft: -12 };
  mln4: { marginLeft: -16 };
  mln5: { marginLeft: -20 };
  mln6: { marginLeft: -24 };
  mln7: { marginLeft: -32 };
  mln8: { marginLeft: -40 };
  mln9: { marginLeft: -48 };
  mrn0: { marginRight: 0 };
  mrn1: { marginRight: -4 };
  mrn2: { marginRight: -8 };
  mrn3: { marginRight: -12 };
  mrn4: { marginRight: -16 };
  mrn5: { marginRight: -20 };
  mrn6: { marginRight: -24 };
  mrn7: { marginRight: -32 };
  mrn8: { marginRight: -40 };
  mrn9: { marginRight: -48 };

  mauto: { margin: 'auto' };
  mxauto: { marginHorizontal: 'auto' };
  myauto: { marginVertical: 'auto' };
  mtauto: { marginTop: 'auto' };
  mbauto: { marginBottom: 'auto' };
  mlauto: { marginLeft: 'auto' };
  mrauto: { marginRight: 'auto' };

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
