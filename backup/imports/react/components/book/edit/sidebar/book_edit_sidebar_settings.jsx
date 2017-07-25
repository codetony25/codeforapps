import React from 'react';

class BookEditSettings extends React.Component {

  constructor(props) {
    super(props);

    this.displayName = 'BookEditSettings';
  }

  renderSettingsToggleByKey = (key) => {
    return (this.props.settings[key]) ?
      <span>Showing</span> : <span>Hiding</span>;
  };

  render() {
    console.log('Rendering BookEditSidebarSettings');
    return (
      <div className="book-edit-sidebar-settings">
        <h3>Settings</h3>
        <div
          className="sidebar-content-block"
          onClick={() => this.props.methods.setSetting(
            'showMarkdownToolbar', !this.props.settings.showMarkdownToolbar)}
        >
          Toolbar {this.renderSettingsToggleByKey('showMarkdownToolbar')}
          <p>Hide or Show the toolbar</p>
          <div className="switch">
            <input id="switch-1" type="checkbox" className="switch-input" />
              <label className="switch-label" />
          </div>
        </div>
        <div
          className="sidebar-content-block"
          onClick={() => this.props.methods.setSetting(
            'showBookStats', !this.props.settings.showBookStats)}
        >
           Stats {this.renderSettingsToggleByKey('showBookStats')}
           <p>Hide or Show Book Stats</p>
           <span className="switch">
            <input type="checkbox" className="toggle-input"/>
          </span>
        </div>
        <div className="sidebar-content-block">
          Preview Screen
          <form>
            <select
              value={this.props.settings.previewLocation}
              onChange={(event) =>
                this.props.methods
                  .setSetting('previewLocation', event.target.value)
              }>
              <option value="bottom">On Bottom</option>
              <option value="side">On Side</option>
              <option value="tab">In Tab on Toolbar</option>
            </select>
          </form>
        </div>

      </div>
    ); 
  }
  
}

export default BookEditSettings;