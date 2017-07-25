import { hexToRgb } from 'jassy';

import color from 'color';
import { globalColor } from './scheme.style';
import { font, themeColor } from './variables.style';

// Font Mixin - This will also generate fallback font for us too
const fallbackFonts = 'Open Sans, sans-serif';

const fontMixin = (options) => {
  const lineHeight = (options.lineHeight) ? `/${options.lineHeight}px` : '';

  options.fontFamily = options.fontFamily || font.primary.normal;
  options.fontWeight = options.fontWeight || 'normal';
  options.fontSize = options.fontSize || '14px';
  options.fontStyle = options.fontStyle || '';

  if (Number.isInteger(options.fontSize)) {
    options.fontSize = `${options.fontSize}px`;
  }

  const fontType = options.fontStyle ?
    `${options.fontStyle} ${options.fontWeight}` : `${options.fontWeight}`;

  return (options.fontSize || options.fontWeight) ?
  { font:  `${fontType} ${options.fontSize}${lineHeight} ${options.fontFamily}, ${fallbackFonts}` } :
  { fontFamily: `${options.fontFamily}, ${fallbackFonts}` };
};

// Font Responsive - Fonts that can scale depending on the viewport width
const fontResponsive = (options) => {
  const defaultMinimumFontSize = 12,
    defaultMaximumFontSize = 24;

  options.fontFamily = options.fontFamily || font.primary.normal;
  options.maxSize = options.maxSize || defaultMinimumFontSize;
  options.minSize = options.minSize || defaultMaximumFontSize;
  options.fontWeight = options.fontWeight || 'normal';

  return {
    fontFamily: `${options.fontFamily}, ${fallbackFonts}`,
    fontSize: `calc(${options.minSize}px + ${options.maxSize - options.minSize} * ((100vw - 420px) / 860))`,
    fontWeight: options.fontWeight
  };
};

// Position Center Absolute
const positionAbsoluteCenter = () => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto'
  };
};

// Flex Dead Center
const flexDeadCenter = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
};

// Flex Padding Center
const flexDeadCenterPadding = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 70,
    paddingBottom: 100
  };
};

/**
 * Button Mixin - Gets the text color and background color
 * and generates a awesome button.
 */
const button = (btnTextColor, btnBgColor) => {
  return {
    mixin: fontMixin({
      fontFamily: font.primary.bold,
      fontSize: font.size.extraSmall
    }),
    background: btnBgColor,
    color: btnTextColor,
    position: 'relative',
    borderRadius: 3,
    padding: '1rem 2rem',
    letterSpacing: .5,
    border: 'none',
    zIndex: 1,
    textAlign: 'center',
    transition: '.3s',
    cursor: 'pointer',
    boxShadow: `0 2px 0 rgba(${hexToRgb(btnBgColor)},0.5)`,
    ':hover': {
      background: color(btnBgColor).lighten(0.05).hexString()
    },
    ':active': {
      outline: 'none',
      background: color(btnBgColor).darken(0.05).hexString(),
      top: 1,
      boxShadow: 'none'
    },
    ':focus': {
      outline: 'none'
    },
    '&.btn-outline': {
      border: `1px solid ${globalColor.btnOutlineBorder}`,
      background: 'none',
      boxShadow: 'none',
      padding: '0.95rem 1.95rem',
      ':hover': {
        border: `1px solid ${color(btnBgColor).lighten(0.05).hexString()}`
      }
    },
    '&.btn-large': {
      mixin: fontMixin({
        fontFamily: font.primary.bold,
        fontSize: font.size.small
      }),
      padding: '1rem 2rem'
    },
    '&.btn-small': {
      mixin: fontMixin({
        fontFamily: font.primary.bold,
        fontSize: font.size.extraSmall
      }),
      padding: '0.6rem 1rem'
    },
    '&.btn-loading': {
      cursor: 'progress',
      '::before': {
        mixin: positionAbsoluteCenter(),
        content: `''`,
        width: 25,
        height: 25,
        borderRadius: '100%',
        zIndex: 10,
        border: '4px solid rgba(255, 255, 255, 0.2)',
        borderTopColor: '#fff',
        animation: 'spin 1s infinite linear'
      },
      '::after': {
        content: `''`,
        position: 'absolute',
        display: 'block',
        background: btnBgColor,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }
    }
  };
};

/**
 * EverLib Logo Mixin
 */
const everLibLogoAllBars = (options) => {
  const transitionTime = .5,
    logoBarWidth = 9;

  options.width = options.width || logoBarWidth;
  options.transition = `${options.transition || transitionTime}`;
  options.animation = options.animation || false;
  options.height = options.height || false;
  options.verticalAlign = options.verticalAlign || false;

  const allBarsStyles = {
    display: 'inline-block',

    borderRadius: 13,
    width: options.width,
    transition: options.transition
  };

  if (options.animation) {
    Object.assign(allBarsStyles, {
      animation: options.animation
    });
  }

  if (options.height) {
    Object.assign(allBarsStyles, {
      height: options.height
    });
  }

  if (options.verticalAlign) {
    Object.assign(allBarsStyles, {
      verticalAlign: options.verticalAlign
    });
  }

  return allBarsStyles;
};

const everLibLogoMixin = (options) => {
  // Default Sizes, Degrees for logo.
  let defaultLogoBarWidth = 9;
  let defaultLogoWidth = 188;

  const defaultLastBarRotationInDegrees = -20,
    transitionTime = .5,
    logoHeights = {
      firstLogoBarHeight: 40,
      secondLogoBarHeight: 48,
      thirdLogoBarHeight: 44,
      fourthLogoBarHeight: 36
    };

  /**
   * Type of Logo that they wish to transpile out
   * There's the 'regular', 'loading', 'transition-in', and 'equalizer'
   */
  options.logoType = options.logoType || 'regular';

  /**
   * These are all hovering effects that the logo includes, They are all
   * turned off by default.
   */
  options.hoverLastBarSlideIn = options.hoverLastBarSlideIn || false;
  options.hoverEachBar = options.hoverEachBar || false;

  /**
   * we can adjust the size by including a positive to increase
   * or a negative number to decrease the size.
   */
  options.adjustHeighPixels = options.adjustHeighPixels || 0;
  options.adjustWidthPixels = options.adjustWidthPixels || 0;
  options.adjustSize = options.adjustSize || 0;
  options.adjustLogoWidth = options.adjustLogoWidth || defaultLogoWidth;

  /**
   * If you wish the logo to transition slower or faster this is what option
   * you'd use the option has to be in a string with seconds. Default will
   * be 5 milliseconds.
   */
  options.transition = `${options.transition || transitionTime}s`;

  // Rotation in Degrees for the last bar, defaults to the slanted bar.
  options.lastBarRotationInDegrees =
    `${options.lastBarRotationInDegrees || defaultLastBarRotationInDegrees}deg`;

  // Starting Opacity Level
  options.opacity = options.opacity || 1;

  // Size Adjustments only happens if they are changed.
  if (options.adjustWidthPixels !== 0 || options.adjustSize !== 0) {
    const calculatedLogoBarWidthSize = 4.7;

    defaultLogoBarWidth +=
      (options.adjustWidthPixels / calculatedLogoBarWidthSize ||
      options.adjustSize / calculatedLogoBarWidthSize);

    /**
     * As the width of each bar is changed, the width of the logo container
     * should change too to keep the space between evenly
     */
    const calculatedLogoWidthSize = () => {
      if (options.adjustSize < 0) {
        return Math.abs(
          Math.abs((options.adjustSize)) - options.adjustLogoWidth
        );
      } else {
        return Math.abs((options.adjustSize)) + options.adjustLogoWidth;
      }
    };

    options.adjustLogoWidth = calculatedLogoWidthSize();

    // Defaults to 1px width if it is lower than 0.
    if (defaultLogoBarWidth <= 0) { defaultLogoBarWidth = 1; }
  }

  // Adds to each height if the option is adjusted.
  if (options.adjustHeighPixels !== 0 || options.adjustSize !== 0) {
    for(const key in logoHeights) {
      logoHeights[key] += (options.adjustHeighPixels || options.adjustSize);

      // Defaults to 1px height if it is lower than 0.
      if (logoHeights[key] <= 0) { logoHeights[key] = 1; }
    }
  }

  const everLibLogoCss = {},
    everLibBarSelectors = {
      firstBar: '.everlib-logo-first-bar',
      secondBar: '.everlib-logo-second-bar',
      thirdBar: '.everlib-logo-third-bar',
      fourthBar: '.everlib-logo-fourth-bar'
    };

  // Default EverLib Logo Styles
  everLibLogoCss['.everlib-logo'] = {
    background: 'transparent',
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: options.adjustLogoWidth
  };

  everLibLogoCss['.everlib-logo-first-bar'] = {
    mixin: everLibLogoAllBars({
      width: defaultLogoBarWidth,
      transition: options.transition,
      opacity: options.opacity
    }),
    height: logoHeights.firstLogoBarHeight,
    background: themeColor.first
  };

  everLibLogoCss['.everlib-logo-second-bar'] = {
    mixin: everLibLogoAllBars({
      width: defaultLogoBarWidth,
      transition: options.transition,
      opacity: options.opacity
    }),
    height: logoHeights.secondLogoBarHeight,
    background: themeColor.second
  };

  everLibLogoCss['.everlib-logo-third-bar'] = {
    mixin: everLibLogoAllBars({
      width: defaultLogoBarWidth,
      transition: options.transition,
      opacity: options.opacity
    }),
    height: logoHeights.thirdLogoBarHeight,
    background: themeColor.third
  };

  everLibLogoCss['.everlib-logo-fourth-bar'] = {
    mixin: everLibLogoAllBars({
      width: defaultLogoBarWidth,
      transition: options.transition,
      opacity: options.opacity
    }),
    height: logoHeights.fourthLogoBarHeight,
    background: themeColor.fourth,
    marginLeft: '1%',
    transform: `rotate(${options.lastBarRotationInDegrees})`
  };

  // Logo Type Styles to overwrite if different type is chosen
  if (options.logoType === 'loading') {
    Object.assign(everLibLogoCss['.everlib-logo-first-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-loading 1s 0s infinite ease-in-out',
        height: logoHeights.firstLogoBarHeight,
        opacity: 0.4
      }),
      animationDelay: '-0.7s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-second-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-loading 1s 0s infinite ease-in-out',
        height: logoHeights.firstLogoBarHeight,
        opacity: 0.4
      }),
      animationDelay: '-0.5s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-third-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-loading 1s 0s infinite ease-in-out',
        height: logoHeights.firstLogoBarHeight,
        opacity: 0.4
      }),
      animationDelay: '-0.3s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-fourth-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-loading 1s 0s infinite ease-in-out',
        height: logoHeights.firstLogoBarHeight,
        opacity: 0.4
      }),
      animationDelay: '-0.1s',
      transform: 'none',
      marginLeft: '0'
    });
  } else if (options.logoType === 'equalizer') {
    Object.assign(everLibLogoCss['.everlib-logo-first-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-equalize 4s 0s linear infinite',
        verticalAlign: 'top'
      }),
      animationDelay: '-1.9s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-second-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-equalize 4s 0s linear infinite',
        verticalAlign: 'top'
      }),
      animationDelay: '-2.9s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-third-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-equalize 4s 0s linear infinite',
        verticalAlign: 'top'
      }),
      animationDelay: '-3.9s'
    });

    Object.assign(everLibLogoCss['.everlib-logo-fourth-bar'], {
      mixin: everLibLogoAllBars({
        animation: 'logo-equalize 4s 0s linear infinite',
        verticalAlign: 'top'
      }),
      animationDelay: '-4.9s',
      transform: 'none',
      marginLeft: '0'
    });
  } else if (options.logoType === 'transition-in') {
    Object.assign(everLibLogoCss['.everlib-logo-first-bar'], {
      mixin: everLibLogoAllBars({
        opacity: 0
      }),
      position: 'relative',
      left: 19,
      animation: 'logo-slide-left 1s ease-in-out forwards'
    });

    Object.assign(everLibLogoCss['.everlib-logo-second-bar'], {
      mixin: everLibLogoAllBars({
        opacity: 0
      }),
      animation: 'logo-opacity-in 1s ease-in-out forwards'
    });

    Object.assign(everLibLogoCss['.everlib-logo-third-bar'], {
      mixin: everLibLogoAllBars({
        opacity: 0
      }),
      position: 'relative',
      right: 19,
      animation: 'logo-slide-right 1s ease-in-out forwards'
    });

    Object.assign(everLibLogoCss['.everlib-logo-fourth-bar'], {
      mixin: everLibLogoAllBars({
        opacity: 0
      }),
      animationDelay: '-1.5s',
      transform: 'none',
      animation: 'logo-slide-right-rotate 2s ease-in-out forwards',
      position: 'relative',
      right: 38,
      marginLeft: 0
    });
  }

  // Hover States
  if (options.hoverLastBarSlideIn) {
    everLibLogoCss['.everlib-logo:hover .everlib-logo-fourth-bar'] = {
      transform: 'rotate(0deg)',
      marginLeft: 0
    };
  }

  if (options.hoverEachBar) {
    everLibLogoCss['.everlib-logo i:hover'] = {
      opacity: 1
    };
  }

  return everLibLogoCss;
};

export {
  fontMixin,
  fontResponsive,
  positionAbsoluteCenter,
  flexDeadCenter,
  flexDeadCenterPadding,
  everLibLogoMixin,
  button
};
