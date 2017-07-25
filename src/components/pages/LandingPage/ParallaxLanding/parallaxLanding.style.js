import { landingColor } from '../../../../styles/shared/scheme.style';
import { font } from '../../../../styles/shared/variables.style';
import {
  flexDeadCenter,
  fontResponsive
} from '../../../../styles/shared/mixin.style';

const parallaxStyle = () => {
  return {
    '.parallax-container': {
      mixin: flexDeadCenter(),
      position: 'relative',
      height: 320,
      width: '100%',
      overflow: 'hidden',
      '&.book-parallax': {
        background: `url('/assets/images/landing/coding-books.jpg') \
                    no-repeat fixed center center / cover`,
        transform: 'translateZ(0)'
      },
      '&.author-parallax': {
        background: `url('/assets/images/landing/coding-author.jpg') \
                    no-repeat fixed center center / cover`,
        transform: 'translateZ(0)'
      }
    },
    '.parallax-action-container': {
      textAlign: 'center'
    },
    '.parallax-main-text': {
      mixin: fontResponsive({
        fontFamily: font.primary.extraBold,
        maxSize: 34,
        minSize: 30
      }),
      marginTop: 0,
      padding: '15px 0',
      position: 'relative',
      zIndex: 10,
      textShadow: `5px 5px 20px ${landingColor.textShadow}`,
      color: landingColor.textDefault
    },
    '.parallax-overlay': {
      position: 'absolute',
      zIndex: 1,
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      background: landingColor.overlay
    },
    '.parallax-actions': {
      display: 'flex',
      justifyContent: 'center',
      '.btn-info': {
        marginRight: 32
      },
      '.icon': {
        fontSize: 13,
        marginLeft: 10
      }
    }
  };
};

export default parallaxStyle;
