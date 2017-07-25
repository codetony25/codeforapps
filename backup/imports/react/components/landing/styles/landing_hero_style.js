import { landingColor } from '/imports/react/styles/scheme';
import { font } from '/imports/react/styles/variables';
import {
  flexDeadCenter,
  positionAbsoluteCenter,
  fontResponsive
} from '/imports/react/styles/mixins';

const landingHeroStyles = () => {
  return {
    '.landing-hero-container': {
      mixin: flexDeadCenter(),
      background: landingColor.bg,
      padding: '0 15px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },

    '.landing-hero-video-container': {
      mixin: positionAbsoluteCenter(),
      background: 'no-repeat center center / cover'
    },

    '.landing-hero-video': {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },

    '.landing-hero-arrow-container': {
      position: 'absolute',
      textAlign: 'center',
      cursor: 'pointer',
      bottom: 50,
      left: '50%',
      animation: 'bounce 2s infinite both',

      '.icon': {
        marginLeft: -15,
        position: 'relative',
        fontSize: '3rem',
        color: landingColor.icon
      }
    },

    '.landing-hero-video-overlay': {
      mixin: positionAbsoluteCenter(),
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      background: landingColor.overlay
    },

    '.landing-hero-slogan': {
      position: 'relative',
      zIndex: 10
    },

    '.landing-hero-slogan-text': {
      mixin: fontResponsive({
        fontFamily: font.primary.extraBold,
        maxSize: 55,
        minSize: 40
      }),
      color: landingColor.textDefault,
      margin: 0,
      textShadow: `5px 5px 20px ${landingColor.textShadow}`,
      letterSpacing: '1.5px'
    },

    '.landing-hero-second-slogan': {
      mixin: fontResponsive({
        fontFamily: font.primary.thin,
        maxSize: 28,
        minSize: 20
      }),
      color: landingColor.textDefault,
      textShadow: `5px 5px 20px ${landingColor.textShadow}`
    },

    '.landing-hero-action-container': {
      paddingTop: 42,
      minHeight: 122
    }
  };

};

export default landingHeroStyles;
