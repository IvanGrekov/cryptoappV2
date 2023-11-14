import { extendTheme } from 'native-base';

const COLORS = {
    primary: {
        900: '#AEDEFC',
    },
    primaryOpacity: {
        900: 'rgba(174, 222, 252, 0.7)',
    },
    secondary: {
        900: '#164863',
    },
    secondaryOpacity: {
        900: 'rgba(22, 72, 99, 0.7)',
    },
    redOpacity: {
        900: 'rgba(244, 80, 80, 0.7)',
    },
};

const FONT_SIZES = {
    '2xs': 8,
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 30,
    '5xl': 36,
    '6xl': 48,
    '7xl': 60,
    '8xl': 72,
    '9xl': 96,
};

const SIZE = {
    0: 0,
    '0.5': 2,
    1: 4,
    '1.5': 6,
    2: 8,
    '2.5': 10,
    3: 12,
    '3.5': 14,
    4: 16,
    '4.5': 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
    px: 1,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '5/6': '83.333%',
    full: '100%',
};

export const THEME = extendTheme({
    colors: COLORS,
    fontSizes: FONT_SIZES,
    size: SIZE,
    components: {
        Button: {
            variants: {
                solid: {
                    bg: COLORS.primary[900],
                    borderRadius: SIZE['2'],
                    _pressed: {
                        bg: COLORS.primaryOpacity[900],
                    },
                    _text: {
                        color: COLORS.secondary[900],
                    },
                },
            },
        },
    },
});

export const STYLE_VARIABLES = {
    bgColor: COLORS.primary[900],
    bgOpacity: COLORS.primaryOpacity[900],
    fgColor: COLORS.secondary[900],
    fgOpacity: COLORS.secondaryOpacity[900],

    red: THEME.colors.rose[600],
    redOpacity: COLORS.redOpacity[900],
    gray: THEME.colors.gray[300],
    grayOpacity: THEME.colors.gray[400],
    black: THEME.colors.gray[900],
    blackOpacity: 'rgba(0, 0, 0, 0.3)',
    blackInvisible: 'rgba(0, 0, 0, 0.1)',

    mdPadding: SIZE['4.5'],
    smPadding: SIZE['3.5'],
    xsPadding: SIZE['2'],

    mdRadius: SIZE['5'],
    smRadius: SIZE['3.5'],
    xsRadius: SIZE['2.5'],

    coinImgSize: SIZE['10'],
    imgSize: SIZE['20'],

    xlSpacing: SIZE['4'],
    lgSpacing: SIZE['2'],
    mdSpacing: SIZE['1'],
    smSpacing: SIZE['0.5'],
    xsSpacing: SIZE.px,

    headingFontSize: FONT_SIZES.lg,
    extraHeadingFontSize: FONT_SIZES['3xl'],
};
