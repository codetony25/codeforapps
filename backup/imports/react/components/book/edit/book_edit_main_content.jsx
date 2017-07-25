import { debounce } from 'lodash';
import React from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import {
  EverLibEditor,
  EverLibToolbar,
  EverLibEditorStats
} from '/imports/modules/everlib_editor';

class BookEditMainContent extends React.Component {

  constructor(props) {
    super(props);

    // TODO: Have to convert the text stored
    // TODO: in the database to the initial editor state

    this.displayName = 'BookEditMainContent';
    this.initialText =
      convertFromRaw(props.book.draft.chapters[props.selectedChapter].text);

    this.state = {
      titleValue: props.book.draft.chapters[props.selectedChapter].title,
      isToolbarHidden: false,
      browserWidth: '',
      editorState: EditorState.createWithContent(
        this.initialText
      )
    };

    /**
     * Medium Media Query to keep track of resizing and when the
     * component is mounted To show the correct main content width
     */
    this.mediaQueryLargeWidth = 992;

    this.milliSecondsToSave = 3000;
    this.maxChapterTitleLength = 100;

  }

  /**
   * When the component is mounted, it will see if the browser width is less
   * than less than 768, and if it is, then it will shift the main content
   * all the way to the left on its initial load. It will also add the
   * resizing event listener.
   */
  componentDidMount = () => {
    const bookMainElement = this.refs.bookMainContent;

    if (window.innerWidth <= this.mediaQueryLargeWidth) {
      bookMainElement.style.left = '0px';
    }

    window.addEventListener('resize', this.onWindowResize);
  };
  
  /**
   * We are currently not tying the changes to the text area to database
   * changes. This is because it's quicker to simply keep track of the text
   * in state and have a stub go off and handle the database saving. However,
   * switching between chapters is a good time to grab the current value of
   * that text from the database (the book props object)
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChapter !== nextProps.selectedChapter) {

      // Get the new chapters text and convert it from it's raw form
      const newText = convertFromRaw(
        nextProps.book.draft.chapters[nextProps.selectedChapter].text
      );

      // Set the new content on to state
      this.setState({
        editorState: EditorState.createWithContent(newText),
        titleValue: nextProps.book.draft
          .chapters[nextProps.selectedChapter].title
      });
    }
  }

  /**
   * Because our component is receiving multiple props,
   *  we only want to update it in a few cases.
   *  If any of the following are true:
   * 1) The current selected chapter has changed.
   * 2) The value of state.textValue has changed -
   *   Note: We will only be pulling in the text value of a chapter from the
   *         database on initial load or when a new chapter is selected.
   *         This is to make sure there are no back and forth issues
   *         with reactive data overwriting the text that's being typed.
   * 3) Settings to the page have changed
   *
   * Don't be alarmed by the tripe equality check comparing the props.settings
   * object to the nextProps.settings object. This actually works for prop
   * objects in react.
   */
  shouldComponentUpdate = (nextProps, nextState) => {
    return ((this.props.selectedChapter !== nextProps.selectedChapter) ||
            (this.state.editorState !== nextState.editorState) ||
            (this.state.titleValue !== nextState.titleValue) ||
            (this.props.settings !== nextProps.settings) ||
            (this.props.isToolbarHidden !== nextState.isToolbarHidden));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize);
  };

  /**
   * On window re-sizing, the main content will shift the amount of pixels
   * to the left depending on the media query width of 768 and also if
   * the sidebar content has been toggled or not.
   */
  onWindowResize = () => {
    const lessThanInnerWidth = (window.innerWidth <= this.mediaQueryLargeWidth),
      moreThanInnerWidth = (window.innerWidth >= this.mediaQueryLargeWidth),
      isSidebarHidden = this.props.settings.isSidebarContentHidden;

    if (lessThanInnerWidth) {
      this.refs.bookMainContent.style.left = '0px';
    } else if (moreThanInnerWidth && isSidebarHidden) {
      this.refs.bookMainContent.style.left = '80px';
    } else if (moreThanInnerWidth && !isSidebarHidden) {
      this.refs.bookMainContent.style.left = '330px';
    }
  };

  // TODO: Needs to be updated
  // TODO: This is where the db saving chain would start
  onChange = (editorState) => {
    console.log('book_edit_main_content onChange');
    console.log('CHANGING EDITOR STATE');
    this.setState({ editorState });
    const draft = this.props.book.draft;
    draft.chapters[this.props.selectedChapter].text =
      convertToRaw(editorState.getCurrentContent());
    this.debouncedSave(draft);
  };

  /**
   * debounce the saving of the draft
   */
  debouncedSave = debounce((draft) =>
    this.props.methods.saveDraft(draft), this.milliSecondsToSave);

  handleChapterTitleChange = (event) => {
    let title = event.target.value;
    if (title.length >= this.maxChapterTitleLength) {
      title = title.slice(0, this.maxChapterTitleLength);
    }
    if (!title.length) {
      title = 'Chapter Title';
    }
    this.setState({ titleValue: title });
    const draft = this.props.book.draft;
    draft.chapters[this.props.selectedChapter].title = title;
    // TODO: let's just make a separate save for chapter titles
    this.debouncedSave(draft);
  };

  /**
   * Handles resizing of the main content depending on what is
   * currently being toggled by merging the currect styles
   */
  handleMainContentToggleStyles = () => {
    return Object.assign({},
      this.props.settings.isSidebarContentHidden ? { left: 80 } : { left: 330 }
    );
  };

  render() {
    console.log('Rendering in BookEditMainContent');
    // Testing data conversion
    const currentContent =
      convertToRaw(this.state.editorState.getCurrentContent());
    console.log(currentContent);
    return (
      <div
        ref="bookMainContent"
        style={this.handleMainContentToggleStyles()}
        className="book-edit-main-content">
        <EverLibToolbar
          book={this.props.book}
          selectedChapter={this.props.selectedChapter}
          settings={this.props.settings}
          methods={this.props.methods}
          handleChange={(editorState) => this.onChange(editorState)}
          editorState={this.state.editorState}
          editor={this.handleEditor} />
        <div
          ref="bookMainContainer"
          className="book-edit-main-container">
          <div className="chapter-title-container">
            <input
              className="main-content-chapter-title-input"
              type="text"
              value={this.state.titleValue}
              onChange={this.handleChapterTitleChange} />
          </div>
          <EverLibEditor
            handleChange={(editorState) => this.onChange(editorState)}
            editorState={this.state.editorState} />
        </div>
        <EverLibEditorStats
          book={this.props.book}
          selectedChapter={this.props.selectedChapter}
          settings={this.props.settings}
          methods={this.props.methods} />
      </div>
    );
  }

}

export default BookEditMainContent;
