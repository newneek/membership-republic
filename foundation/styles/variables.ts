export default class Variables {
  // Color system
  static black = '#000000';
  static black50 = 'rgba(0, 0, 0, 0.5)';
  static black60 = 'rgba(0, 0, 0, 0.6)';

  static white = '#ffffff';
  static white50 = 'rgba(255, 255, 255, 0.5)';

  static gray100 = '#f7f7f7';
  static gray200 = '#eeeeee';
  static gray300 = '#dbdbdb';
  static gray400 = '#c7c7c7';
  static gray500 = '#aaaaaa';
  static gray600 = '#999999';
  static gray700 = '#777777';
  static gray800 = '#555555';
  static gray900 = '#333333';
  static gray950 = '#111111';

  static coral100 = '#ffedee';
  static coral400 = '#f39c90';
  static coral500 = '#ef7b6a';
  static coral600 = '#ed6653';
  static coral800 = '#BE1E08';

  static teal100 = '#d5f4f2';
  static teal400 = '#9fd8d4';
  static teal700 = '#45ADA6';
  static teal800 = '#007871';
  static teal900 = '#0b4b58';

  static themeColors = {
    black: Variables.black,
    black50: Variables.black50,
    black60: Variables.black60,
    white: Variables.white,
    white50: Variables.white50,
    gray100: Variables.gray100,
    gray200: Variables.gray200,
    gray300: Variables.gray300,
    gray400: Variables.gray400,
    gray500: Variables.gray500,
    gray600: Variables.gray600,
    gray700: Variables.gray700,
    gray800: Variables.gray800,
    gray900: Variables.gray900,
    gray950: Variables.gray950,
    coral100: Variables.coral100,
    coral400: Variables.coral400,
    coral500: Variables.coral500,
    coral600: Variables.coral600,
    coral800: Variables.coral800,
    teal100: Variables.teal100,
    teal400: Variables.teal400,
    teal700: Variables.teal700,
    teal800: Variables.teal800,
    teal900: Variables.teal900,
  };

  // Spacing
  static spacer = 16;
  static spacers = {
    '0': 0,
    '1': Variables.spacer * 0.25,
    '2': Variables.spacer * 0.5,
    '3': Variables.spacer * 0.75,
    '4': Variables.spacer,
    '5': Variables.spacer * 1.25,
    '6': Variables.spacer * 1.5,
    '7': Variables.spacer * 2,
    '8': Variables.spacer * 2.5,
    '9': Variables.spacer * 3,
  };

  // Sizing
  static sizes = {
    '10': '10%',
    '15': '15%',
    '25': '25%',
    '31': '31.6%',
    '35': '35%',
    '50': '50%',
    '66': '66.7%',
    '75': '75%',
    '100': '100%',
    auto: 'auto',
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
