import { bookColor } from '../../../styles/shared/scheme.style';
import { fontMixin } from '../../../styles/shared/mixin.style';
import { font } from '../../../styles/shared/variables.style';

const searchPageStyle = () => {
  return {
    '.book-search-container': {
      background: bookColor.searchBg,
      width: '100%',
      position: 'fixed',
      height: 88,
      'input': {
        mixin: fontMixin({
          fontFamily: font.primary.bold,
          fontSize: font.size.giant
        }),
        width: '100%',
        marginTop: 15,
        padding: '0 85px'
      },
      '.submit-container': {
        position: 'absolute',
        top: 22,
        left: 22,
        '.icon': {
          cursor: 'pointer',
          fontSize: 40,
          color: bookColor.iconSubmit
        }
      },
      '.reset-container': {
        position: 'absolute',
        top: 22,
        right: 45,
        '.icon': {
          cursor: 'pointer',
          fontSize: 40,
          color: bookColor.iconReset
        }
      }
    },
    '.books-detail-container': {
      paddingTop: 30
    }
  };
};

export default searchPageStyle;
