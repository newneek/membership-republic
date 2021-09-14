import React from 'react';
import { View } from 'react-native';
import { bg, border, font, px2, py1, text } from '../foundation/styles';
import { TextBold } from './text';

const textColors: ColorTable = {
    gray: text.color.gray600,
    red: text.color.red600,
    coral: text.color.coral600,
    yellow: text.color.yellow600,
    green: text.color.green600,
    teal: text.color.teal600,
    blue: text.color.blue600,
    indigo: text.color.indigo600,
    purple: text.color.purple600,
    magenta: text.color.magenta600,
};

const backgroundColors: ColorTable = {
    gray: bg.gray100,
    red: bg.red100,
    coral: bg.coral100,
    yellow: bg.yellow100,
    green: bg.green100,
    teal: bg.teal100,
    blue: bg.blue100,
    indigo: bg.indigo100,
    purple: bg.purple100,
    magenta: bg.magenta100,
};

const paddingSize: SizeTable = {
    small: [{ paddingHorizontal: 6 }, py1],
    medium: [px2, py1],
};

const fontSize: SizeTable = {
    small: font.size.xsmall,
    medium: font.size.small,
};

interface Props {
    color: keyof ColorTable;
    size?: keyof SizeTable;
}

export default function Tag(props: React.PropsWithChildren<Props>) {
    const { color, size, children } = props;

    const paddingStyle = paddingSize[size];
    const fontStyle = fontSize[size];

    return (
        <View
            style={[
                { alignSelf: 'flex-start' },
                border.rounded,
                backgroundColors[color],
                paddingStyle,
            ]}
        >
            <TextBold style={[fontStyle, textColors[color]]}>{children}</TextBold>
        </View>
    );
}

Tag.defaultProps = {
    size: 'medium',
};
