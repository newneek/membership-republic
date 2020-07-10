import Variables from './Variables';

type FontSize = { fontSize: number };

export default {
  tight(fontSize: FontSize) {
    return {
      letterSpacing: fontSize.fontSize * Variables.fontTracking.tight,
    };
  },
  normal(fontSize: FontSize) {
    return {
      letterSpacing: fontSize.fontSize * Variables.fontTracking.normal,
    };
  },
  wide(fontSize: FontSize) {
    return {
      letterSpacing: fontSize.fontSize * Variables.fontTracking.wide,
    };
  },
};
