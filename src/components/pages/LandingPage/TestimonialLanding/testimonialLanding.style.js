import { landingColor } from '../../../../styles/shared/scheme.style';
import { font } from '../../../../styles/shared/variables.style';
import { fontMixin } from '../../../../styles/shared/mixin.style';

const testimonialLandingStyle = () => {
  return {
    '.testimonial-container': {
      background: landingColor.bgLight,
      padding: '75px 0'
    },
    '.testimonial-title-container': {
      textAlign: 'center',
      'h2': {
        mixin: fontMixin({
          fontFamily: font.primary.thin,
          fontSize: font.size.extraLarge
        }),
        color: landingColor.textHeader,
        margin: 0,
        '.title-bold': {
          mixin: fontMixin({
            fontFamily: font.primary.extraBold,
            fontSize: font.size.extraLarge
          })
        }
      },
      'h5': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.extraSmall
        }),
        color: landingColor.textBody,
        margin: 0,
        paddingTop: 10
      }
    },
    '.testimonial-message-container': {
      textAlign: 'center',
      paddingTop: 30,
      'h5': {
        mixin: fontMixin({
          fontFamily: font.primary.thin,
          fontSize: font.size.extraSmall,
          fontStyle: 'italic',
          lineHeight: 25
        }),
        margin: '15px auto',
        color: landingColor.textHeader,
        width: '60%'
      },
      'p': {
        mixin: fontMixin({
          fontFamily: font.primary.thin,
          fontSize: font.size.extraSmall
        }),
        color: landingColor.textBody,
        'span': {
          mixin: fontMixin({
            fontFamily: font.primary.bold,
            fontSize: font.size.extraSmall
          })
        }
      }
    },
    '.testimonial-divider': {
      width: 70,
      height: 3,
      margin: '25px auto',
      background: landingColor.border
    }
  };
};

export default testimonialLandingStyle;
