import Variables from './variables';

type fontStyleType = { fontSize: number };

// TODO: Deprecated
export default {
  leadingNone(fontStyle: fontStyleType) {
    return {
      lineHeight: fontStyle.fontSize * Variables.fontLeading.none,
    };
  },
  leadingTight(fontStyle: fontStyleType) {
    return {
      lineHeight: fontStyle.fontSize * Variables.fontLeading.tight,
    };
  },
  leadingNormal(fontStyle: fontStyleType) {
    return {
      lineHeight: fontStyle.fontSize * Variables.fontLeading.normal,
    };
  },
  leadingLoose(fontStyle: fontStyleType) {
    return {
      lineHeight: fontStyle.fontSize * Variables.fontLeading.loose,
    };
  },
  trackingTight(fontStyle: fontStyleType) {
    return {
      letterSpacing: fontStyle.fontSize * Variables.fontTracking.tight,
    };
  },
  trackingNormal(fontStyle: fontStyleType) {
    return {
      letterSpacing: fontStyle.fontSize * Variables.fontTracking.normal,
    };
  },
  trackingWide(fontStyle: fontStyleType) {
    return {
      letterSpacing: fontStyle.fontSize * Variables.fontTracking.wide,
    };
  },
};
