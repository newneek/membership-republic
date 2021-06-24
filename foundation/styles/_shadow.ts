import { Platform, StyleSheet } from 'react-native';

const shadow = StyleSheet.create({
    small: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: {
                    height: 2,
                    width: 0,
                },
            },
            android: {
                elevation: 2,
            },
        }),
    },
    medium: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.12,
                shadowRadius: 6,
                shadowOffset: {
                    height: 4,
                    width: 0,
                },
            },
            android: {
                elevation: 4,
            },
        }),
    },
    large: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.14,
                shadowRadius: 12,
                shadowOffset: {
                    height: 8,
                    width: 0,
                },
            },
            android: {
                elevation: 8,
            },
        }),
    },
    xlarge: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.16,
                shadowRadius: 20,
                shadowOffset: {
                    height: 16,
                    width: 0,
                },
            },
            android: {
                elevation: 16,
            },
        }),
    },
    xxlarge: {
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.24,
                shadowRadius: 50,
                shadowOffset: {
                    height: 24,
                    width: 0,
                },
            },
            android: {
                elevation: 24,
            },
        }),
    },
});

export default shadow;