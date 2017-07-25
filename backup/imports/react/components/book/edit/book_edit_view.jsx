import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';
import { Style } from 'jassy';

import moment from 'moment';
import React from 'react';
import { browserHistory } from 'react-router';

import { newChapter } from './book_edit_helpers';
import BookEditMainContent from './book_edit_main_content';
import bookEditStyles from './book_edit_style';
import BookEditSidebarView from './sidebar/book_edit_sidebar_view';
import ModalLanguage from '/imports/react/components/modal/modal_language';
import { Books } from '/imports/api/books';

// TODO: We will have to make sure the book exists when hitting this page
// TODO: If not the user should be redirected.

class BookEditView extends React.Component {

  /**
   * BookEditView is the entry point for our editing component.
   */
  constructor(props) {
    super(props);

    // Set up our initial state for our entire book editing component.
    this.state = {
      style: bookEditStyles(),
      selectedChapter: '',
      loaded: false,
      showLanguageModal: false,
      settings: {
        lastSaved: '',
        showMarkdownToolbar: true,
        showBookStats: true,
        isSidebarContentHidden: false,
        previewLocation: 'bottom'
      }
    };
    
    // We don't have to put methods on state, they are static & will not change
    this.methods = {
      setSetting: this.setSetting,
      atFirstChapter: this.atFirstChapter,
      atLastChapter: this.atLastChapter,
      selectNextChapter: this.selectNextChapter,
      selectPreviousChapter: this.selectPreviousChapter,
      handleSelectChapter: this.handleSelectChapter,
      handleCreateChapter: this.handleCreateChapter,
      handleDeleteChapter: this.handleDeleteChapter,
      handleSidebarContentToggle: this.handleSidebarContentToggle,
      handleToggleLanguageModal: this.handleToggleLanguageModal,
      saveDraft: this.saveDraft
    };

    this.displayName = 'BookEditView';
  }

  componentWillReceiveProps = (nextProps) => {
    // If we're no longer loading & book is null, we don't have proper access.
    if (!nextProps.subscriptionLoading && !nextProps.book) {
      // We want to use replace instead of push
      // so the bad url doesn't stay in history
      browserHistory.replace('/');
    }
    // If we're not waiting on the subscription anymore, & we haven't set up our
    // state based off some book properties, let's do that now.
    if (!nextProps.subscriptionLoading &&
        nextProps.book && !this.state.loaded) {
      // The selected chapter will be the first key in the chapter list
      this.setState({ selectedChapter: nextProps.book.draft.chapterList[0] });
      this.setState({ loaded: true });
    }

  };
  
  /**
   * This will be the main entry point for saving the draft
   */
  saveDraft = (draft, successCallback, errorCallback) => {
    this.setSetting('lastSaved', 'Saving...');
    Meteor.call('updateBookDraft', this.props.book._id, draft, (err) => {
      if (!err) {
        this.setSetting(
          'lastSaved',
          `Last saved: ${moment(new Date()).format('h:mm:ss a')}`
        );
        if (successCallback) {
          successCallback();
        }
      } else {
        console.log('Error saving the draft: ', err);
        if (errorCallback) {
          errorCallback();
        }
      }
    });
  };

  setSetting = (key, value) => {
    const settings = Object.assign({}, this.state.settings);
    settings[key] = value;
    this.setState({ settings });
  };

  atFirstChapter = () =>
    this.props.book.draft.chapterList.indexOf(this.state.selectedChapter) === 0;

  atLastChapter = () =>
    this.props.book.draft.chapterList.indexOf(this.state.selectedChapter) ===
    (this.props.book.draft.chapterList.length - 1);

  selectNextChapter = () => {
    const chapterList = this.props.book.draft.chapterList;
    const idx = chapterList.indexOf(this.state.selectedChapter);
    if (chapterList[idx+1]) {
      this.setState({ selectedChapter: chapterList[idx+1] });
    }
  };

  selectPreviousChapter = () => {
    const chapterList = this.props.book.draft.chapterList;
    const idx = chapterList.indexOf(this.state.selectedChapter);
    if (chapterList[idx-1]) {
      this.setState({ selectedChapter: chapterList[idx-1] });
    }
  };

  /**
   * This method will get passed down through props so that we can
   * select a chapter from a child component and change the state of this
   * component.
   */
  handleSelectChapter = (selectedChapter) => {
    this.setState({ selectedChapter });
  };

  handleCreateChapter = () => {
    const draft = Object.assign({}, this.props.book.draft);
    const chapterKey = (new Mongo.ObjectID)._str;
    draft.chapters[chapterKey] = newChapter;
    draft.chapterList.push(chapterKey);
    this.saveDraft(draft, () => {
      this.setState({ selectedChapter: chapterKey });
    });
  };

  /**
   * For now, we will handle "deleting" a chapter from the draft
   * as just removing the key from the chapter list. This way we could add
   * functionality for users to see their deleted chapters, & then 'permanently'
   * delete those chapters.
   *
   * If there's only 1 chapter remaining, let's not let them delete it.
   */
  handleDeleteChapter = () => {
    const draft = Object.assign({}, this.props.book.draft);
    // Don't delete the last chapter. A book needs at least 1 chapter.
    if (draft.chapterList.length > 1) {
      let idx = draft.chapterList.indexOf(this.state.selectedChapter);
      draft.chapterList.splice(idx, 1);
      this.saveDraft(draft, () => {
        if (idx >= draft.chapterList.length) {
          idx--;
        }
        this.setState({ selectedChapter: draft.chapterList[idx] });
      });
    }
  };

  /**
   * Toggles the sidebar, unless true is passed in. This ensures
   * the sidebar is shown.
   * @param open
   */
  handleSidebarContentToggle = (open = false) => {
    const settings = Object.assign({}, this.state.settings);
    if (!open) {
      settings.isSidebarContentHidden = !settings.isSidebarContentHidden;
    } else {
      settings.isSidebarContentHidden = false;
    }
    this.setState({ settings });
  };

  handleToggleLanguageModal = () => {
    console.log('handleToggleLanguageModal', this.state.showLanguageModal);
    this.setState({
      showLanguageModal: !this.state.showLanguageModal
    });
  };

  /**
   * If the page is loading do one thing, once the page is done loading do a
   * check to make sure there is a book to view.
   */
  render() {
    console.log('Rendering BookEditView');
    // Otherwise, let's make sure there's a book otherwise redirect
    // The query itself from the server will
    // make sure that the right book is returned if
    // it exists for this user. We wouldn't leave that up to the client.
    if (this.state.loaded) {
      return (
        <div className="book-edit-view">
          <Style rules={this.state.style} />
          <ModalLanguage show={this.state.showLanguageModal} />
          <div className="main-sidebar-wrapper">
            <BookEditSidebarView
              book={this.props.book}
              selectedChapter={this.state.selectedChapter}
              settings={this.state.settings}
              methods={this.methods}
            />
          </div>
          <div className="main-book-content-wrapper">
            <BookEditMainContent
              book={this.props.book}
              selectedChapter={this.state.selectedChapter}
              settings={this.state.settings}
              methods={this.methods}
            />
          </div>
        </div>
      );
    }
    return null;
  }

}

/**
 * This is where we add our book to the props of our component.
 * Some things to note about this. When props change, it could cause our
 * components to re-render. If we're taking the entire book object, when
 * a reader is added, or another value is changed it may cause some unwanted
 * rendering. We will have to carefully inspect this activity and properly
 * adjust in componentWillReceiveProps.
 *
 * return: book and loading are both reactive data sources. book is reactive
 * because it comes from a meteor mongodb reactive environment. loading is a
 * reactive variable that is the subscription handler for book. When the
 * subscription is ready, loading will be false (because we are assigning it
 * the negate value of the handler.ready() function)
 */
export default createContainer((props) => {
  // Get the book from the slug
  const bookHandle = Meteor.subscribe(
    'getBookForBookEdit',
    props.params.bookSlug
  );
  // A variable to see if the book is still loading
  const subscriptionLoading = !bookHandle.ready();
  const book = Books.find({}).fetch()[0];
  return {
    subscriptionLoading,
    book
  };
}, BookEditView);
