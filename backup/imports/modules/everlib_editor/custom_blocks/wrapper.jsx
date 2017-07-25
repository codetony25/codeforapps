import React from 'react';

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }

}

export default Wrapper;