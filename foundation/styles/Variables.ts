export default class Variables {
  // Color system
  static black = "#000000";
  static white = "#ffffff";

  static gray50 = "#F5F5F5";
  static gray100 = "#EEE";
  static gray200 = "#E4E5E5";
  static gray300 = "#CED0D1";
  static gray450 = "#B6BBBF";
  static gray400 = "#979B9E";
  static gray500 = "#77797B";
  static gray600 = "#575B5C";
  static gray700 = "#3C4043";
  static gray800 = "#282B2F";
  static gray900 = "#111213";
  static gray950 = "#111111";

  static coral100 = "#FFEDEE";
  static coral400 = "#F39B8E";
  static coral500 = "#EF7B6A";
  static coral600 = "#ED6653";
  static coral700 = "#E1432E";
  static coral800 = "#BE1E08";

  static primary015 = "rgba(122, 59, 255, 0.15)";
  static primary20 = "#F7F3FF";
  static primary50 = "#F1EBFF";
  static primary100 = "#e9deff";
  static primary200 = "#e0d0ff";
  static primary300 = "#d7c3ff";
  static primary400 = "#cbb2ff";
  static primary500 = "#ba9aff";
  static primary600 = "#aa83ff";
  static primary700 = "#9969ff";
  static primary800 = "#8951ff";
  static primary900 = "#7a3bff";

  static secondary800 = "#13ab76";
  static secondary900 = "#07c281";

  static teal100 = "#D5F4F2";
  static teal400 = "#9FD8D4";
  static teal500 = "#6DC5BF";
  static teal600 = "#45ADA6";
  static teal700 = "#007871";
  static teal800 = "#0E6371";

  static red100 = "#FFE9EE";
  static red600 = "#E95769";
  static red700 = "#D64040";

  static green100 = "#E7F5E9";
  static green600 = "#49AF5A";
  static green700 = "#1C792F";

  static yellow100 = "#FDF5E3";
  static yellow600 = "#DCA416";
  static yellow700 = "#AE851E";

  static blue100 = "#E4F2FD";
  static blue600 = "#2C98F0";
  static blue700 = "#0D66D0";

  static indigo100 = "#E9E9FB";
  static indigo600 = "#675DDD";
  static indigo700 = "#5144E0";

  static purple100 = "#EDE7F6";
  static purple600 = "#8D5BC0";
  static purple700 = "#743DAB";

  static magenta100 = "#FFEAF6";
  static magenta600 = "#D83790";
  static magenta700 = "#C31075";

  static themeColors = {
    black: Variables.black,
    white: Variables.white,
    gray50: Variables.gray50,
    gray100: Variables.gray100,
    gray200: Variables.gray200,
    gray300: Variables.gray300,
    gray400: Variables.gray400,
    gray450: Variables.gray450,
    gray500: Variables.gray500,
    gray600: Variables.gray600,
    gray700: Variables.gray700,
    gray800: Variables.gray800,
    gray900: Variables.gray900,
    gray950: Variables.gray950,
    primary015: Variables.primary015,
    primary20: Variables.primary20,
    primary50: Variables.primary50,
    primary100: Variables.primary100,
    primary200: Variables.primary200,
    primary300: Variables.primary300,
    primary400: Variables.primary400,
    primary500: Variables.primary500,
    primary600: Variables.primary600,
    primary700: Variables.primary700,
    primary800: Variables.primary800,
    primary900: Variables.primary900,
    secondary800: Variables.secondary800,
    secondary900: Variables.secondary900,
    coral100: Variables.coral100,
    coral400: Variables.coral400,
    coral500: Variables.coral500,
    coral600: Variables.coral600,
    coral700: Variables.coral700,
    coral800: Variables.coral800,
    teal100: Variables.teal100,
    teal400: Variables.teal400,
    teal500: Variables.teal500,
    teal600: Variables.teal600,
    teal700: Variables.teal700,
    teal800: Variables.teal800,
    red100: Variables.red100,
    red600: Variables.red600,
    red700: Variables.red700,
    green100: Variables.green100,
    green600: Variables.green600,
    green700: Variables.green700,
    yellow100: Variables.yellow100,
    yellow600: Variables.yellow600,
    yellow700: Variables.yellow700,
    blue100: Variables.blue100,
    blue600: Variables.blue600,
    blue700: Variables.blue700,
    indigo100: Variables.indigo100,
    indigo600: Variables.indigo600,
    indigo700: Variables.indigo700,
    purple100: Variables.purple100,
    purple600: Variables.purple600,
    purple700: Variables.purple700,
    magenta100: Variables.magenta100,
    magenta600: Variables.magenta600,
    magenta700: Variables.magenta700,
  };

  // Spacing
  static spacer = 16;
  static spacers = {
    "0": 0,
    "1": Variables.spacer * 0.25,
    "2": Variables.spacer * 0.5,
    "3": Variables.spacer * 0.75,
    "4": Variables.spacer,
    "5": Variables.spacer * 1.25,
    "6": Variables.spacer * 1.5,
    "7": Variables.spacer * 2,
    "8": Variables.spacer * 2.5,
    "9": Variables.spacer * 3,
  };

  // Sizing
  static sizes = {
    "10": "10%",
    "15": "15%",
    "25": "25%",
    "31": "31.6%",
    "33": "33.3%",
    "35": "35%",
    "50": "50%",
    "66": "66.7%",
    "75": "75%",
    "100": "100%",
    auto: "auto",
  };

  static fontSizes = {
    fontSize5XLarge: 2.25,
    fontSize4XLarge: 2,
    fontSize3XLarge: 1.75,
    fontSize2XLarge: 1.5,
    fontSizeXLarge: 1.25,
    fontSizeLarge: 1.125,
    fontSizeMedium: 1,
    fontSizeSmall: 0.875,
    fontSizeXSmall: 0.75,
  };

  static fontLeading = {
    none: 1,
    tight: 1.3,
    normal: 1.5,
    loose: 1.8,
  };

  static fontTracking = {
    tight: -0.05,
    normal: 0,
    wide: 0.05,
  };

  // font
  static baseFontSize = 16;

  static baseLineHeight = 1.5;

  // border

  static borderWidth = 1;
  static borderColor = Variables.gray300;

  static borderRadiusSmall = Variables.baseFontSize * 0.2;
  static borderRadius = Variables.baseFontSize * 0.25;
  static borderRadiusLarge = Variables.baseFontSize * 0.3;

  static roundedCircle = Variables.baseFontSize * 1000;
  static roundedPill = Variables.baseFontSize * 1000;
}
