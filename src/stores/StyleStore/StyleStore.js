import { observable } from 'mobx';

import * as getInitialStyles from '../../styles';

class StyleStore {

  // Initial and Default Styles on load
  constructor() {
    const {
      defaultStyle,
      globalStyle,
      fontStyle,
      formStyle,
      buttonStyle
    } = { ...getInitialStyles };

    this.initialStyles = {
      ...defaultStyle,
      ...globalStyle,
      ...fontStyle,
      ...formStyle,
      ...buttonStyle
    };
  }

  // TODO: Add a way to add each component styles

}

export default new StyleStore();
