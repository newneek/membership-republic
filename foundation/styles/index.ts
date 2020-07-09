import _border from './_border';
import _rounded from './_borderRounded';
import color from './_color';
import font from './_font';
import leading from './_leading';
import sizing from './_sizing';
import spacing from './_spacing';
import text from './_text';
import tracking from './_tracking';
import util from './_util';

const { border0, ...border } = _border;
const { rounded0, ...rounded } = _rounded;

export default { border: _border, color, font, leading, sizing, spacing, text, tracking, util };

export {
  border,
  border0,
  rounded,
  rounded0,
  color,
  font,
  leading,
  sizing,
  spacing,
  text,
  tracking,
};
