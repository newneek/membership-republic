import React from 'react';
import { View } from 'react-native';
import { bg, border, border1, font, px3, py1, text } from '../foundation/styles';
import { TextBold } from './text';

const solidTextColors: ColorTable = {
  gray: text.color.white,
  red: text.color.white,
  coral: text.color.white,
  yellow: text.color.white,
  green: text.color.white,
  teal: text.color.white,
  blue: text.color.white,
  indigo: text.color.white,
  purple: text.color.white,
  magenta: text.color.white,
};

const solidBackgroundColors: ColorTable = {
  gray: bg.gray600,
  red: bg.red600,
  coral: bg.coral600,
  yellow: bg.yellow600,
  green: bg.green600,
  teal: bg.teal600,
  blue: bg.blue600,
  indigo: bg.indigo600,
  purple: bg.purple600,
  magenta: bg.magenta600,
};

const ghostTextColors: ColorTable = {
  gray: text.color.gray700,
  red: text.color.red700,
  coral: text.color.coral700,
  yellow: text.color.yellow700,
  green: text.color.green700,
  teal: text.color.teal700,
  blue: text.color.blue700,
  indigo: text.color.indigo700,
  purple: text.color.purple700,
  magenta: text.color.magenta700,
};

const ghostBorderColors: ColorTable = {
  gray: border.color.gray700,
  red: border.color.red700,
  coral: border.color.coral700,
  yellow: border.color.yellow700,
  green: border.color.green700,
  teal: border.color.teal700,
  blue: border.color.blue700,
  indigo: border.color.indigo700,
  purple: border.color.purple700,
  magenta: border.color.magenta700,
};

interface Props {
  type: 'solid' | 'ghost';
  color: keyof ColorTable;
}

export default function Badge(props: React.PropsWithChildren<Props>) {
  const { type, color, children } = props;

  const textColor = type === 'solid' ? solidTextColors[color] : ghostTextColors[color];
  const backgroundOrBorderColor =
    type === 'solid' ? solidBackgroundColors[color] : ghostBorderColors[color];

  return (
    <View
      style={[
        { alignSelf: 'flex-start' },
        type === 'ghost' && border1,
        border.roundedPill,
        backgroundOrBorderColor,
        px3,
        py1,
      ]}
    >
      <TextBold style={[font.size.small, textColor]}>{children}</TextBold>
    </View>
  );
}
