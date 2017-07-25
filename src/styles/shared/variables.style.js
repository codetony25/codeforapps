// Colors
export const primaryColor = {
  white: '#ffffff', // need a white.
  black: '#000000', // box shadows... text shadows... overlays...
  catskill: '#fafbfb', // for very light background for maybe inner code bg
  ghost: '#f1f5f5', // for light background
  egg: '#1b5063', // for background or buttons
  gumbo: '#6a8d99', // for text on background
  tuna: '#647276', // for normal text and headings
  shaft: '#12282f', // for footer or other backgrounds possibly
  athens: '#e5eeed', // for background light grayish can be used for code bg
  torch: '#be465c', // for buttons or alerts
  malachite: '#0bc477', // greeens **THIRD Bar Logo**
  newyork: '#f1788d', // another suddle red **SECOND Bar Logo**
  fuego: '#afe30b', // cause we need yellows somewhere...
  pampas: '#fbfbf9', // for medium light background
  diane: '#214753', // for mostly links, but can be a background as well
  regent: '#a2d6e5', // we need blues somewhere...
  stone: '#1a3741', // Borders!!!
  cerulean: '#00aced,', // Butons Icons Lighter background
  radiance: '#0098ed', // Buttons Icons Darker Background **FIRST Bar Logo**
  lightGhost: '#c7cad1', // input borders
  carrot: '#f0902e', // **FOURTH Bar Logo**,
  coral: '#fa3e3e' // more solid red for darker bg
};

export const themeColor = {
  first: '#0f87ae',
  second: '#b75690',
  third: '#86c035',
  fourth: '#f0902e'
};

// Colors From http://paletton.com/#uid=33p0u0kbRt14+E48dwffUpTkImm
export const hslColor = {
  dominant: 193,
  accentFirst: 29,
  accentSecond: 42,
  accentThird: 229
};

export const mainColor = {
  dominantPrimary: `hsl(${hslColor.dominant}, 45%, 54%)`,
  dominantDarkest: `hsla(${hslColor.dominant}, 45%, 12%, 1)`,
  dominantDarker: `hsl(${hslColor.dominant}, 45%, 21%)`,
  dominantDark: `hsl(${hslColor.dominant}, 45%, 29%)`,
  dominantDarkTransparent: `hsla(${hslColor.dominant}, 45%, 12%, 0.85)`,
  dominantMediumTransparent: `hsla(${hslColor.dominant}, 45%, 12%, 0.55)`,
  dominantLightestTransparent: `hsla(${hslColor.dominant}, 45%, 12%, 0.2)`,
  dominantTransparent: `hsla(${hslColor.dominant}, 45%, 12%, 0)`,
  dominantMedium: `hsl(${hslColor.dominant}, 45%, 35%)`,
  dominantMediumLight: `hsl(${hslColor.dominant}, 45%, 44%)`,
  dominantMediumLighter: `hsl(${hslColor.dominant}, 45%, 57%)`,
  dominantLight: `hsl(${hslColor.dominant}, 45%, 81%)`,
  dominantLighter: `hsl(${hslColor.dominant}, 45%, 94%)`,
  dominantLightest: `hsl(${hslColor.dominant}, 45%, 98%)`,
  accentFirstPrimary: `hsl(${hslColor.accentFirst}, 100%, 71%)`,
  accentFirstDark: `hsl(${hslColor.accentFirst}, 100%, 53%)`,
  accentFirstMedium: `hsl(${hslColor.accentFirst}, 100%, 65%)`,
  accentFirstLight: `hsl(${hslColor.accentFirst}, 100%, 86%)`,
  accentSecondPrimary: `hsl(${hslColor.accentSecond}, 82%, 53%)`,
  accentThirdPrimary: `hsl(${hslColor.accentThird}, 48%, 58%)`,
  accentThirdDark: `hsl(${hslColor.accentThird}, 48%, 48%)`,
  accentThirdMedium: `hsl(${hslColor.accentThird}, 48%, 70%)`,
  accentThirdLight: `hsl(${hslColor.accentThird}, 48%, 83%)`
};

// Media Queries
export const media = {
  small: '@media (min-width: 554px)',
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 992px)',
  extraLarge: '@media (min-width: 1200px)'
};

// Fonts
export const font = {
  // Font Families
  primary: {
    thin: 'ProximaNovaThin',
    normal: 'ProximaNovaNormal',
    semiBold: 'ProximaNovaSemiBold',
    bold: 'ProximaNovaBold',
    extraBold: 'ProximaNovaExtraBold'
  },
  secondary: {
    thin: 'RobotoThin',
    normal: 'RobotoNormal',
    semiBold: 'RobotoSemiBold',
    bold: 'RobotoBold',
    mono: 'RobotoMonoNormal'
  },
  tertiary: {
    normal: 'DroidSerifNormal',
    bold: 'DroidSerifBold'
  },

  // Pre-defined Font Sizes
  size: {
    tiny: '0.875rem',   // 14px
    extraSmall: '1rem', // 16px
    small: '1.125rem',  // 18px
    medium: '1.25rem',  // 20px
    large: '1.5rem',    // 24px
    extraLarge: '2rem', // 32px
    giant: '3rem'       // 48px
  },

  // Font Weights
  weight: {
    thin: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 900
  }
};

export default {
  primaryColor,
  themeColor,
  hslColor,
  mainColor,
  media,
  font
}
