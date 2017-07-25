import React from 'react';
import { Style } from 'jassy';
import ListDescription from './DescriptionSearch/ListDescription.jsx';
import DescriptionSearch from './DescriptionSearch';

import searchPageStyle from './searchPage.style';

class SearchPage extends React.Component {

  static displayName = 'SearchPage';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-search-view">
        <Style rules={searchPageStyle()} />
        <ListDescription />
        <DescriptionSearch />
      </div>
    );
  }

}

export default SearchPage;
