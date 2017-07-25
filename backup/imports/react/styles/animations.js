const animationStyles = {
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)'
    },
    '40%': {
      transform: 'translateY(-30px)'
    },
    '60%': {
      transform: 'translateY(-15px)'
    }
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },

  '@keyframes logo-loading': {
    '0%': {
      opacity: 1
    },

    '100%': {
      opacity: 0.5
    }
  },

  '@keyframes logo-slide-left': {
    '100%': {
      transform: 'translate(-210%, 0)',
      opacity: 1
    }
  },

  '@keyframes logo-slide-right': {
    '100%': {
      transform: 'translate(210%, 0)',
      opacity: 1
    }
  },

  '@keyframes logo-opacity-in': {
    '100%': {
      opacity: 1
    }
  },

  '@keyframes logo-slide-right-rotate': {
    '100%': {
      transform: 'translate(460%, 0%) rotate(-20deg)',
      opacity: 1
    }
  }
};

/**
 * Sets up our equalizer keyframe because it has a lot of percentages to be
 * accounted for.
 */
const equalizerKeyframe = () => {
  const equalizeKeyframeObject = {},
    keyframeMaxPercentage = 100,
    percentIncreaseBy = 4;

  for (let i = 0; i <= keyframeMaxPercentage; i += percentIncreaseBy) {
    /* eslint-disable no-magic-numbers */
    switch (i) {
      case 0:
      case 36:
      case 48:
      case 64:
      case 72:
      case 80:
      case 88:
      case 96:
      case 100: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 48
        };
        break;
      }
      case 4: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 42
        };
        break;
      }
      case 24:
      case 32:
      case 44: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 40
        };
        break;
      }
      case 12:
      case 20:
      case 52:
      case 68: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 30
        };
        break;
      }
      case 16:
      case 40:
      case 76:
      case 92: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 20
        };
        break;
      }
      case 28:
      case 56: {
        equalizeKeyframeObject[`${i}%`] = {
          height: 10
        };
        break;
      }
    }
    /* eslint-enable no-magic-numbers */
  }

  return equalizeKeyframeObject;
};

animationStyles['@keyframes logo-equalize'] = equalizerKeyframe();

export default animationStyles;