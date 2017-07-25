import React from 'react';
import { observer } from 'mobx-react';
import { Style } from 'jassy';
import DevTools from 'mobx-react-devtools';

import { HeaderLayout, FooterLayout } from '../../layouts';

@observer(['StyleStore'])
class LayoutContainer extends React.Component {

  static displayName = 'LayoutContainer';

  constructor(props) {
    super(props);
  }

  render() {
    const { error, children, StyleStore } = this.props;
    const { ...initialStyles } = StyleStore.initialStyles;

    if (error) {
      return children;
    } else {
      return (
        <div>
          <Style rules={initialStyles} />
          {__IS_DEVELOPMENT__ ?
            <DevTools position={{ bottom: 0, right: 20 }} /> : null}
          <div className="main-container">
            <HeaderLayout {...this.props} />
            <div className="view-container">
              {children}
            </div>
            <FooterLayout {...this.props} />
          </div>
        </div>
      );
    }
  }

}

export default LayoutContainer;
