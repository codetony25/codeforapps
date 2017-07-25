import React from 'react';
import { Style } from 'jassy';

import listItemAuthBlockStyle from './listItemAuthBlock.style';

class ListItemAuthBlock extends React.Component {

  static displayName = 'ListItemAuthBlock';

  constructor(props) {
    super(props);
  }

  // TODO: Include our own icons
  render() {
    const { listItem } = this.props;
    return (
      <div>
        <Style rules={listItemAuthBlockStyle} />
        <li className="list-item-auth-list">
          <i className="icon ion-ios-bookmarks" />
          {listItem}
        </li>
      </div>
    );
  }

}

export default ListItemAuthBlock;
