import React from 'react';
import { Style } from 'jassy';

import listAuthBlockStyle from './listAuthBlock.style';
import ListItemAuthBlock from '../ListItemAuthBlock/ListItemAuthBlock.jsx';

class ListAuthBlock extends React.Component {

  static displayName = 'ListAuthBlock';

  constructor(props) {
    super(props);
  }

  renderListItem = (authList) => {
    return authList.map((list) => {
      const { listItem } = list;
      return (
        <ListItemAuthBlock
          key={listItem}
          listItem={listItem}
        />
      );
    });
  };

  render() {
    const { authList } = this.props;

    return(
      <div>
        <Style rules={listAuthBlockStyle} />
        <ul className="list-auth-block-container">
          {this.renderListItem(authList)}
        </ul>
      </div>
    );
  }

}

export default ListAuthBlock;
