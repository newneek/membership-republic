import Variables from './Variables';

type FontSize = { fontSize: number };

export default {
  none(fontSize: FontSize) {
    return { lineHeight: fontSize.fontSize * Variables.fontLeading.none };
  },
  tight(fontSize: FontSize) {
    return { lineHeight: fontSize.fontSize * Variables.fontLeading.tight };
  },
  normal(fontSize: FontSize) {
    return { lineHeight: fontSize.fontSize * Variables.fontLeading.normal };
  },
  loose(fontSize: FontSize) {
    return { lineHeight: fontSize.fontSize * Variables.fontLeading.loose };
  },
};
