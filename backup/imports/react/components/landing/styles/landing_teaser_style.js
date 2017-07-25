import { landingColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const landingTeaserStyles = () => {
  return {
    '.landing-teaser-container': {
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

    '.landing-teaser-section': {
      display: 'block',

      'img': {
        height: 85,

        [media.large]: {
          marginBottom: 20
        },

        [media.extraLarge]: {
          marginRight: 30
        }
      }
    },

    '.landing-teaser-details-container': {
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

export default landingTeaserStyles;
