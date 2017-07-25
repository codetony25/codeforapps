import React from 'react';

class PageNotFound extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'PageNotFound';
  }

  render = () => (
    <div className="page-not-found">
      <div>
        {`So incredibly sorry! It seems the page you are looking for
        could not be found!`}
      </div>
      <img src="/images/app/404.jpg" />
    </div>
  );
}

export default PageNotFound;
