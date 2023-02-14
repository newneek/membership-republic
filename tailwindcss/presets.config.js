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
      slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A'
      },
      gray: {
        100: '#F8FAFC',
        // 현재 gray100에 slate50값 적용되어있음
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#CBD5E1',
        // 현재 gray400에 slate300값 적용되어있음
        500: '#94A3B8',
        // 현재 gray500에 slate400값 적용되어있음
        600: '#94A3B8',
        // 현재 gray600에 slate400값 적용되어있음
        700: '#64748B',
        // 현재 gray700에 slate500값 적용되어있음
        800: '#475569',
        // 현재 gray800에 slate600값 적용되어있음
        900: '#0F172A'
      },
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D'
      },
      coral: {
        50: '#FFF5E0',
        100: '#FFDABC',
        200: '#FFC6AA',
        300: '#FFB49B',
        400: '#FF8775',
        500: '#EF7B6A',
        600: '#ED6653',
        700: '#E1432E',
        800: '#B43625',
        900: '#902B1D'
      },
      yellow: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12'
      },
      green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D'
      },
      teal: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A'
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A'
      },
      indigo: {
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#C7D2FE',
        300: '#A5B4FC',
        400: '#818CF8',
        500: '#6366F1',
        600: '#4F46E5',
        700: '#4338CA',
        800: '#3730A3',
        900: '#312E81'
      },
      purple: {
        50: '#FAF5FF',
        100: '#F3E8FF',
        200: '#E9D5FF',
        300: '#D8B4FE',
        400: '#C084FC',
        500: '#A855F7',
        600: '#9333EA',
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87'
      },
      magenta: {
        50: '#FDF4FF',
        100: '#FAE8FF',
        200: '#F5D0FE',
        300: '#F0ABFC',
        400: '#E879F9',
        500: '#D946EF',
        600: '#C026D3',
        700: '#A21CAF',
        800: '#86198F',
        900: '#701A75'
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
