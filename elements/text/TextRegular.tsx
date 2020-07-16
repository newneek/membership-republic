/* eslint-disable react/jsx-props-no-spreading */
import { font } from '@republic/foundation/styles';
import React from 'react';
import { Text, TextProps } from 'react-native';

export default function TextRegular(props: React.PropsWithChildren<TextProps>) {
  return (
    <Text {...props} style={[font.sans, font.weight.normal, props.style]}>
      {props.children}
    </Text>
  );
}
