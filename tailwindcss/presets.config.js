module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      // reset default line height and add default line height in tailwind.css
      xs: ['0.75rem'],
      sm: ['0.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
      '6xl': ['3.75rem'],
      '7xl': ['4.5rem'],
      '8xl': ['6rem'],
      '9xl': ['8rem'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: {
        100: '#f7f7f7',
        200: '#eeeeee',
        300: '#dbdbdb',
        400: '#c7c7c7',
        500: '#aaaaaa',
        600: '#999999',
        700: '#777777',
        800: '#555555',
        900: '#333333',
        950: '#111111',
      },
      red: {
        100: '#ffe9ee',
        600: '#e95769',
        700: '#d64040',
      },
      coral: {
        100: '#ffedee',
        400: '#f39b8e',
        500: '#ef7b6a',
        600: '#ed6653',
        700: '#e1432e',
        800: '#be1e08',
      },
      yellow: {
        100: '#fdf5e3',
        600: '#dca416',
        700: '#ae851e',
      },
      green: {
        100: '#e7f5e9',
        600: '#49af5a',
        700: '#1c792f',
      },
      teal: {
        100: '#d5f4f2',
        400: '#9fd8d4',
        500: '#6DC5BF',
        600: '#45ada6',
        700: '#007871',
        800: '#0E6371',
      },
      blue: {
        100: '#e4f2fd',
        600: '#2c98fd',
        700: '#0d66d0',
      },
      indigo: {
        100: '#e9e9fb',
        600: '#675ddd',
        700: '#5144e0',
      },
      purple: {
        100: '#ede7f6',
        600: '#8d5bc0',
        700: '#743dab',
      },
      magenta: {
        100: '#ffeaf6',
        600: '#d83790',
        700: '#c31075',
      },
    },
    extend: {
      zIndex: {
        1040: '1040',
        1050: '1050',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
};
