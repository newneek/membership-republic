import bg from './_background';
import _border from './_border';
import color from './_color';
import font from './_font';
import leading from './_leading';
import _rounded from './_rounded';
import sizing from './_sizing';
import spacing from './_spacing';
import text from './_text';
import tracking from './_tracking';
import util from './_util';

const { border0, ...border } = _border;
const { rounded0, ...rounded } = _rounded;

export default { border: _border, color, font, leading, sizing, spacing, text, tracking, util };

export {
  bg,
  border,
  border0,
  color,
  font,
  leading,
  rounded,
  rounded0,
  sizing,
  spacing,
  text,
  tracking,
};
