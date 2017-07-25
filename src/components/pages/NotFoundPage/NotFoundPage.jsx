import React from 'react';

class NotFoundView extends React.Component {

  static displayName = 'NotFound';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-not-found">
        <div>
          {`So incredibly sorry! It seems the page you are looking for
        could not be found!`}
        </div>
        <img src="/assets/images/not-found/404.jpg" />
      </div>
    );
  }

}

export default NotFoundView;
