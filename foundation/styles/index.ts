import align from './_align';
import bg from './_background';
import _border from './_border';
import color from './_color';
import _flex from './_flex';
import font from './_font';
import items from './_items';
import justify from './_justify';
import leading from './_leading';
import _rounded from './_rounded';
import sizing from './_sizing';
import spacing from './_spacing';
import text from './_text';
import tracking from './_tracking';
import util from './_util';

const { border0, ...border } = _border;
const { flex1, flex2, flex3, ...flex } = _flex;
const { rounded0, ...rounded } = _rounded;

export default { border: _border, color, font, leading, sizing, spacing, text, tracking, util };

export {
  align,
  bg,
  border,
  border0,
  flex,
  flex1,
  flex2,
  flex3,
  font,
  items,
  justify,
  leading,
  rounded,
  rounded0,
  sizing,
  spacing,
  text,
  tracking,
};
