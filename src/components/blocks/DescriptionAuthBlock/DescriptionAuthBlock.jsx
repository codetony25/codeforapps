import React from 'react';
import { Style } from 'jassy';

import descriptionAuthBlockStyle from './descriptionAuthBlock.style';
import ListAuthBlock from '../ListAuthBlock/ListAuthBlock.jsx';

class DescriptionAuthBlock extends React.Component {

  static displayName = 'DescriptionAuthBlock';

  constructor(props) {
    super(props);
  }

  render() {
    const {
      authHeader,
      authDescription,
      authList
    } = this.props;

    return (
      <div className="description-auth-block-container">
        <Style rules={descriptionAuthBlockStyle} />
        <h1>{authHeader}</h1>
        <p>{authDescription}</p>
        <ListAuthBlock authList={authList} />
      </div>
    );
  }

}

export default DescriptionAuthBlock;
