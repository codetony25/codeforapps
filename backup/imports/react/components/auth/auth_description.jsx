import React from 'react';

class AuthDescription extends React.Component {
  
  constructor(props) {
    super(props);

    this.displayName = 'AuthDescription';
  }

  render() {
    return (
      <div className="auth-description-container">
        <h1>{this.props.authHeader}</h1>
        <p>{this.props.authDescription}</p>
        {this.props.authList()}
      </div>
    );
  }
  
}

export default AuthDescription;
