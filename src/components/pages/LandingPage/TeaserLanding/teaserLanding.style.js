import { landingColor } from '../../../../styles/shared/scheme.style';
import { font, media } from '../../../../styles/shared/variables.style';
import { fontMixin } from '../../../../styles/shared/mixin.style';

const teaserLandingStyles = () => {
  return {
    '.teaser-container': {
      display: 'block',
      textAlign: 'center',
      background: landingColor.bgLight,
      padding: '45px 0',
      '.container': {
        [media.large]: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        [media.extraLarge]: {
          textAlign: 'left',
          padding: '20px 0'
        }
      }
    },
    '.teaser-section': {
      display: 'flex',
      alignItems: 'flex-start',
      'img': {
        height: 85,
        [media.extraLarge]: {
          marginRight: 30
        }
      }
    },
    '.teaser-details-container': {
      display: 'block',
      margin: '40px auto',
      width: '70%',
      [media.large]: {
        margin: '0 auto',
        display: 'inline-block',
        width: 245
      },
      'h3': {
        mixin: fontMixin({
          fontFamily: font.primary.extraBold,
          fontSize: font.size.medium
        }),
        margin: 0,
        color: landingColor.textHeader
      },
      'p': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny,
          lineHeight: 22
        }),
        marginTop: 8,
        color: landingColor.textBody,
        paddingBottom: 25
      }
    }
  };
};

export default teaserLandingStyles;
