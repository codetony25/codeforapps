import { landingColor } from '../../../../styles/shared/scheme.style';
import { font } from '../../../../styles/shared/variables.style';
import {
  flexDeadCenter,
  positionAbsoluteCenter,
  fontResponsive
} from '../../../../styles/shared/mixin.style';

const heroLandingStyle = () => {
  return {
    '.hero-container': {
      mixin: flexDeadCenter(),
      background: landingColor.bg,
      padding: '0 15px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      height: 'calc(100vh + 72px)'
    },
    '.hero-video-container': {
      mixin: positionAbsoluteCenter(),
      background: 'no-repeat center center / cover'
    },
    '.hero-video': {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '.hero-arrow-container': {
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
    '.hero-video-overlay': {
      mixin: positionAbsoluteCenter(),
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      background: landingColor.overlay
    },
    '.hero-slogan': {
      position: 'relative',
      zIndex: 10
    },
    '.hero-slogan-text': {
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
    '.hero-second-slogan': {
      mixin: fontResponsive({
        fontFamily: font.primary.thin,
        maxSize: 28,
        minSize: 20
      }),
      color: landingColor.textDefault,
      textShadow: `5px 5px 20px ${landingColor.textShadow}`
    },
    '.hero-action-container': {
      paddingTop: 42,
      minHeight: 122
    }
  };
};

export default heroLandingStyle;
