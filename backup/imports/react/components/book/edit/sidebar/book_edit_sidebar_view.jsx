/**
 * This view should show the currently selected icon in the view
 *
 * BookEditChapters is default
 */

import React from 'react';
import { Style } from 'jassy';

import BookEditSidebarChapters from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_chapters';
import BookEditSidebarDetails from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_details';
import BookEditSidebarHelp from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_help';
import BookEditSidebarIcons from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_icons';
import BookEditSidebarImages from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_images';
import BookEditSidebarPublish from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_publish';
import BookEditSidebarSettings from
  '/imports/react/components/book/edit/sidebar/book_edit_sidebar_settings';
import userSidebarStyles from
  '/imports/react/styles/shared/user_sidebar_style';

class BookEditSidebarLayout extends React.Component {

  constructor(props) {
    super(props);

    // TODO: We can also pull settings from the user's preferences
    // Maybe they want sidebar closed by default, etc
    this.state = {
      styles: userSidebarStyles(),
      sidebarView: 'Chapters'
    };

    this.displayName = 'UserSidebarLayout';
  }

  // Shows a section from clicking on an icon in left_sidebar_icons
  show = (sidebarView) => {
    // Make sure the sidebar is open
    this.props.methods.handleSidebarContentToggle(true);
    this.setState({ sidebarView });
  };

  renderSelectedComponent = () => {
    console.log('rendering selected component',
      !this.props.settings.isSidebarContentHidden);
    if (!this.props.settings.isSidebarContentHidden) {
      if (this.state.sidebarView === 'Help') {
        return (
          <BookEditSidebarHelp
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods} />
        );
      }
      if (this.state.sidebarView === 'Settings') {
        return (
          <BookEditSidebarSettings
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods} />
        );
      }
      if (this.state.sidebarView === 'Details') {
        return (
          <BookEditSidebarDetails
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods} />
        );
      }
      if (this.state.sidebarView === 'Images') {
        return (
          <BookEditSidebarImages
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods} />
        );
      }
      if (this.state.sidebarView === 'Publish') {
        return (
          <BookEditSidebarPublish
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods} />
        );
      }


      // If the sidebar is open and none of these are selected, default
      // to Chapters
      return (
        <BookEditSidebarChapters
          book={this.props.book}
          selectedChapter={this.props.selectedChapter}
          settings={this.props.settings}
          methods={this.props.methods} />
      );
    }
    // If sidebar isn't open, don't display anything
    return null;
  };

  render() {
    console.log('Rendering UserSidebarLayout');
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="user-sidebar-layout">
          {/* The Icons should always be visible */}
          <BookEditSidebarIcons
            active={this.state.sidebarView}
            settings={this.props.settings}
            show={(section) => this.show(section)}
            titleSlug={this.props.book.titleSlug}
            methods={this.props.methods}
          />
          {/* Display one sidebar component (or none if not open) */}
          {this.renderSelectedComponent()}
        </div>
      </div>
    );
  }

}

export default BookEditSidebarLayout;