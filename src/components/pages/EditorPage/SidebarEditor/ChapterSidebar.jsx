import React from 'react';
import { render } from 'react-dom';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove
} from 'react-sortable-hoc';

class ChapterSidebar extends React.Component {

  static displayName = 'ChapterSidebar';

  constructor(props) {
    super(props);

    this.state = {
      showSearch: true,
      searchTerm: ''
    };
  }

  /**
   * Normally you wouldn't want to join an array as a string and then compare
   * the string to see if the array has changed (because of empty strings and
   * other various reasons) but in this case, since we know it's a hex string
   * it's ok
   */
  shouldComponentUpdate = (nextProps, nextState) =>
    this.props.selectedChapter !== nextProps.selectedChapter ||
    this.props.searchTerm !== nextProps.searchTerm ||
    (this.props.book.draft.chapterList.join('') !==
    nextProps.book.draft.chapterList.join('')) ||
    this.props.book.draft.chapters !== nextProps.book.draft.chapters;

  /* ************************************************************************
   * This section of components is for handling drag and drop
   */

  DragHandle = SortableHandle(() =>
    <span>
      <i className="icon ion-drag" />
    </span>
  );

  SortableItem = SortableElement((props) =>
    <li
      className={props.clKey === this.props.selectedChapter ? 'highlight' : ''}
      onClick={() => this.props.methods.handleSelectChapter(props.clKey)}
    >
      <this.DragHandle />
      {this.props.book.draft.chapters[props.clKey].title}
    </li>
  );

  /**
   * chapterList is an array of the id keys of all the chapters.
   * clKey -> chapterListKey
   */
  SortableList = SortableContainer(({ chapterList }) => {
    return (
      <ul className="chapter-list">
        {chapterList.map((clKey, index) =>
          <this.SortableItem key={clKey} index={index} clKey={clKey} />
        )}
      </ul>
    );
  });

  /**
   * This is what happens after our arrays are done moving.
   */
  onSortEnd = ({ oldIndex, newIndex }) => {
    // Perform the rearrangement
    const chapterList =
      arrayMove(this.props.book.draft.chapterList, oldIndex, newIndex);
    // Update the draft
    const draft = Object.assign({}, this.props.book.draft);
    draft.chapterList = chapterList;
    this.props.methods.saveDraft(draft);
  };

  /**
   * End drag and drop functionality
   *****************************************************************/

  handleSearchClick = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  renderSearch = () => {
    return (this.state.showSearch) ?
      (
        <div className="chapter-search">
          <input
            type="text"
            placeholder="Search book..."
            onChange={this.handleSearchInputChange}
            value={this.state.searchTerm}
          />
          <i
            className="icon ion-ios-close-outline"
            onClick={() => this.setState({ searchTerm: '' })}
          />
        </div>
      ) : null;
  };

  render() {
    console.log('Rendering BookEditChapterSidebar');
    return (
      <div className="sidebar-chapters-container">
        {this.renderSearch()}
        <this.SortableList
          chapterList={this.props.book.draft.chapterList}
          onSortEnd={this.onSortEnd}
          useDragHandle={true}
        />
        <div className="chapter-action-icons">
          <button
            className="btn-success"
            onClick={() => this.props.methods.handleCreateChapter()}
          >
            NEW
          </button>
          <button
            className="btn-danger"
            onClick={() => this.props.methods.handleDeleteChapter()}
          >
            <i className="icon ion-trash-b" />
          </button>
        </div>
      </div>
    );
  }

}

export default ChapterSidebar;
