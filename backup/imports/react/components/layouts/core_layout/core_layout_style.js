import { media } from '/imports/react/styles/variables';

export const coreLayoutStyles = () => {
  return {
    '.main-container': {
      marginTop: 50
    },

    '.view-container': {
      minHeight: '100%',
      paddingBottom: 1070,

      [media.medium]: {
        paddingBottom: 457
      }
    }
  };
};

export default coreLayoutStyles;
