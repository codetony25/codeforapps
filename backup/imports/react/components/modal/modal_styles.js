import { modalColor } from '/imports/react/styles/scheme';

export const modalLanguageStyles = (options) => {
  options.isVisible = options.isVisible || false;

  return {
    '.modal-language': {
      display: options.isVisible ? 'inline-block' : 'none',
      width: 500,
      height: 300,
      border: `1px solid ${modalColor.border}`,
      background: modalColor.bg,
      borderRadius: 3,
      position: 'absolute',
      left: '50%',
      top: '50%',
      zIndex: 1000,
      padding: '2rem',

      'input': {
        border: `1px solid ${modalColor.inputBorder}`
      }
    }
  };
};