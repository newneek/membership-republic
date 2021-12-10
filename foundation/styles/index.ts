import align from './_align';
import bg from './_background';
import _border from './_border';
import color from './_color';
import _flex from './_flex';
import font from './_font';
import img from './_image';
import items from './_items';
import justify from './_justify';
import leading from './_leading';
import overflow from './_overflow';
import _rounded from './_rounded';
import sizing from './_sizing';
import spacing from './_spacing';
import text from './_text';
import tracking from './_tracking';
import util from './_util';
import shadow from './_shadow';
import _opacity from './_opacity';
import bgOpacity from './_bgOpacity';

const { border0, border1, borderAll, ...border } = _border;
const { flex1, flex2, flex3, flex4, flex5, ...flex } = _flex;
const { rounded0, ...rounded } = _rounded;
const {
  opacity0,
  opacity10,
  opacity20,
  opacity30,
  opacity40,
  opacity50,
  opacity60,
  opacity70,
  opacity80,
  opacity90,
  opacity100,
  ...opacity
} = _opacity;

/* TODO: 2020.07.24 Typescript에서 object spread export 를 지원하지 않음
 * 우선 인터페이스 수동 작성하여 자동 완성 동작하도록 처리
 */
const {
  h10,
  h15,
  h25,
  h31,
  h35,
  h50,
  h66,
  h75,
  h100,
  hauto,

  w10,
  w15,
  w25,
  w31,
  w33,
  w35,
  w50,
  w66,
  w75,
  w100,
  wauto,
} = sizing;
const {
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  px0,
  px1,
  px2,
  px3,
  px4,
  px5,
  px6,
  px7,
  px8,
  px9,
  py0,
  py1,
  py2,
  py3,
  py4,
  py5,
  py6,
  py7,
  py8,
  py9,
  pt0,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pt8,
  pt9,
  pb0,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pb7,
  pb8,
  pb9,
  pl0,
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
  pl7,
  pl8,
  pl9,
  pr0,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  pr6,
  pr7,
  pr8,
  pr9,

  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  mx0,
  mx1,
  mx2,
  mx3,
  mx4,
  mx5,
  mx6,
  mx7,
  mx8,
  mx9,
  my0,
  my1,
  my2,
  my3,
  my4,
  my5,
  my6,
  my7,
  my8,
  my9,
  mt0,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mt7,
  mt8,
  mt9,
  mb0,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  mb7,
  mb8,
  mb9,
  ml0,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  ml7,
  ml8,
  ml9,
  mr0,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  mr6,
  mr7,
  mr8,
  mr9,

  mn0,
  mn1,
  mn2,
  mn3,
  mn4,
  mn5,
  mn6,
  mn7,
  mn8,
  mn9,
  mxn0,
  mxn1,
  mxn2,
  mxn3,
  mxn4,
  mxn5,
  mxn6,
  mxn7,
  mxn8,
  mxn9,
  myn0,
  myn1,
  myn2,
  myn3,
  myn4,
  myn5,
  myn6,
  myn7,
  myn8,
  myn9,
  mtn0,
  mtn1,
  mtn2,
  mtn3,
  mtn4,
  mtn5,
  mtn6,
  mtn7,
  mtn8,
  mtn9,
  mbn0,
  mbn1,
  mbn2,
  mbn3,
  mbn4,
  mbn5,
  mbn6,
  mbn7,
  mbn8,
  mbn9,
  mln0,
  mln1,
  mln2,
  mln3,
  mln4,
  mln5,
  mln6,
  mln7,
  mln8,
  mln9,
  mrn0,
  mrn1,
  mrn2,
  mrn3,
  mrn4,
  mrn5,
  mrn6,
  mrn7,
  mrn8,
  mrn9,

  mauto,
  mxauto,
  myauto,
  mtauto,
  mbauto,
  mlauto,
  mrauto,
} = spacing;

export default { border: _border, color, font, leading, sizing, spacing, text, tracking, util };

export {
  align,
  bg,
  border,
  border0,
  border1,
  borderAll,
  flex,
  flex1,
  flex2,
  flex3,
  flex4,
  flex5,
  font,
  img,
  items,
  justify,
  leading,
  overflow,
  rounded,
  rounded0,
  sizing,
  spacing,
  text,
  tracking,
  shadow,
  opacity,
  opacity0,
  opacity10,
  opacity20,
  opacity30,
  opacity40,
  opacity50,
  opacity60,
  opacity70,
  opacity80,
  opacity90,
  opacity100,
  bgOpacity,
  h10,
  h15,
  h25,
  h31,
  h35,
  h50,
  h66,
  h75,
  h100,
  hauto,
  w10,
  w15,
  w25,
  w31,
  w33,
  w35,
  w50,
  w66,
  w75,
  w100,
  wauto,
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  px0,
  px1,
  px2,
  px3,
  px4,
  px5,
  px6,
  px7,
  px8,
  px9,
  py0,
  py1,
  py2,
  py3,
  py4,
  py5,
  py6,
  py7,
  py8,
  py9,
  pt0,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pt8,
  pt9,
  pb0,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pb7,
  pb8,
  pb9,
  pl0,
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
  pl7,
  pl8,
  pl9,
  pr0,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  pr6,
  pr7,
  pr8,
  pr9,
  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  mx0,
  mx1,
  mx2,
  mx3,
  mx4,
  mx5,
  mx6,
  mx7,
  mx8,
  mx9,
  my0,
  my1,
  my2,
  my3,
  my4,
  my5,
  my6,
  my7,
  my8,
  my9,
  mt0,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mt7,
  mt8,
  mt9,
  mb0,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  mb7,
  mb8,
  mb9,
  ml0,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  ml7,
  ml8,
  ml9,
  mr0,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  mr6,
  mr7,
  mr8,
  mr9,
  mn0,
  mn1,
  mn2,
  mn3,
  mn4,
  mn5,
  mn6,
  mn7,
  mn8,
  mn9,
  mxn0,
  mxn1,
  mxn2,
  mxn3,
  mxn4,
  mxn5,
  mxn6,
  mxn7,
  mxn8,
  mxn9,
  myn0,
  myn1,
  myn2,
  myn3,
  myn4,
  myn5,
  myn6,
  myn7,
  myn8,
  myn9,
  mtn0,
  mtn1,
  mtn2,
  mtn3,
  mtn4,
  mtn5,
  mtn6,
  mtn7,
  mtn8,
  mtn9,
  mbn0,
  mbn1,
  mbn2,
  mbn3,
  mbn4,
  mbn5,
  mbn6,
  mbn7,
  mbn8,
  mbn9,
  mln0,
  mln1,
  mln2,
  mln3,
  mln4,
  mln5,
  mln6,
  mln7,
  mln8,
  mln9,
  mrn0,
  mrn1,
  mrn2,
  mrn3,
  mrn4,
  mrn5,
  mrn6,
  mrn7,
  mrn8,
  mrn9,
  mauto,
  mxauto,
  myauto,
  mtauto,
  mbauto,
  mlauto,
  mrauto,
};
