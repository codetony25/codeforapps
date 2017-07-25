/**
 * This view should show the currently selected icon in the view
 *
 * ChapterSidebar is default
 */

import React from 'react';

import ChapterSidebar from './ChapterSidebar.jsx';
import DetailSidebar from './DetailSidebar.jsx';
import HelpSidebar from './HelpSidebar.jsx';
import NavigationSidebar from './NavigationSidebar.jsx';
import ContentUploadSidebar from './ContentUploadSidebar.jsx';
import PublishSidebar from './PublishSidebar.jsx';
import SettingSidebar from './SettingSidebar.jsx';

class SidebarEditor extends React.Component {

  static displayName = 'SidebarEditor';

  constructor(props) {
    super(props);

    // TODO: We can also pull settings from the user's preferences
    // Maybe they want sidebar closed by default, etc
    this.state = {
      sidebarView: 'Chapters'
    };
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
          <HelpSidebar
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods}
          />
        );
      }
      if (this.state.sidebarView === 'Settings') {
        return (
          <SettingSidebar
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods}
          />
        );
      }
      if (this.state.sidebarView === 'Details') {
        return (
          <DetailSidebar
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods}
          />
        );
      }
      if (this.state.sidebarView === 'Images') {
        return (
          <ContentUploadSidebar
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods}
          />
        );
      }
      if (this.state.sidebarView === 'Publish') {
        return (
          <PublishSidebar
            book={this.props.book}
            selectedChapter={this.props.selectedChapter}
            settings={this.props.settings}
            methods={this.props.methods}
          />
        );
      }


      // If the sidebar is open and none of these are selected, default
      // to Chapters
      return (
        <ChapterSidebar
          book={this.props.book}
          selectedChapter={this.props.selectedChapter}
          settings={this.props.settings}
          methods={this.props.methods}
        />
      );
    }
    // If sidebar isn't open, don't display anything
    return null;
  };

  render() {
    console.log('Rendering EditorSidebar');
    return (
      <div>
        <div className="sidebar-editor-container">
          {/* The Icons should always be visible */}
          <NavigationSidebar
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

export default SidebarEditor;
