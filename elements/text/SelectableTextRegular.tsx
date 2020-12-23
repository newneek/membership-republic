/* eslint-disable react/jsx-props-no-spreading */
import { font } from '@republic/foundation/styles';
import React from 'react';
import { Text, TextProps, TextInput, Platform } from 'react-native';

export default function SelectableTextRegular(props: React.PropsWithChildren<TextProps>) {
  const commonStyle = [font.sans, font.weight.normal];
  return (
    Platform.OS ==='ios' ? 
    <TextInput 
      editable={false}
      scrollEnabled={false}
      multiline
      {...props}
      style={[...commonStyle, props.style]}
      >
        {props.children}
      </TextInput>
    :
    <Text selectable {...props} style={[font.sans, font.weight.normal, props.style]}>
      {props.children}
    </Text>
  );
}