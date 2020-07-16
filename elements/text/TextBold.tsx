/* eslint-disable react/jsx-props-no-spreading */
import { font } from '@republic/foundation/styles';
import React from 'react';
import { Text, TextProps } from 'react-native';

export default function TextBold(props: React.PropsWithChildren<TextProps>) {
  return (
    <Text {...props} style={[font.sans, font.weight.bold, props.style]}>
      {props.children}
    </Text>
  );
}
