import React from 'react';

class Wrapper extends React.Component {

  static displayName = '/core/modules/everlib_editor/custom_blocks/wrapper';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

export default Wrapper;
