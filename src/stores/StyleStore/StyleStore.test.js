import StyleStore from './StyleStore';

const additionalStyles = {
  'a': {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  'ul, ol': {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
};

const moreAdditionalStyles = {
  'body': {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
    outline: 0
  }
};

const mergeAdditionalStyles =
  Object.assign({}, additionalStyles, moreAdditionalStyles);

describe('StyleStore', () => {

  it('applies additional styles objects', () => {
    StyleStore.addStyle(additionalStyles);
    expect(StyleStore.styles).toEqual(additionalStyles);
  });

  it('applies more styles to object while maintaining previous styles', () => {
    StyleStore.addStyle(moreAdditionalStyles);
    expect(StyleStore.styles).toEqual(mergeAdditionalStyles);
  });

});
