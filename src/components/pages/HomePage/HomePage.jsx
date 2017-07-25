import React from 'react';

class HomePage extends React.Component {

  static displayName = 'HomePage';

  constructor(props) {
    super(props);
  }

  render() {
    const inlineStyles = {
      color: 'blue',
      display: 'block',
      textAlign: 'center',
      marginTop: 80
    };

    return (
      <div className="home-container">
        <h1 style={inlineStyles}>This is the Home View!</h1>
      </div>
    );
  }

}

export default HomePage;
