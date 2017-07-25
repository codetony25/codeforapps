import React from 'react';

class ContentUploadSidebar extends React.Component {

  static displayName = 'ContentUploadSidebar';

  constructor(props) {
    super(props);

    this.state = {
      imageUploading: false,
      imageUploaded: false,
      imageError: ''
    };
    this.initialState = Object.assign({}, this.state);

    console.warn('Image Manager is not complete.');
    console.warn('Image Manager is simulating longer upload.');
  }

  resetState = () => {
    this.setState(this.initialState);
  };

  handleImageChange = (event) => {
    this.setState({
      imageError: '',
      imageUploading: true
    });
    const reader = new FileReader();
    const file = event.target.files[0];

    // TODO: Validation
    if (
      !file ||
      !file.name ||
      !file.name.toLowerCase().includes('.png', file.name.length-4)
    ) {
      this.setState({
        imageError: 'This is not an image file.',
        imageUploading: false
      });
      return;
    }


    reader.onloadend = () => {
      Meteor.call('saveImage', reader.result, (err) => {
        if (err) {
          console.log('error from saveImage');
        }
        this.setState({
          imageUploaded: true,
          imageUploading: false
        });
      });
    };

    // TODO: Remove the simulation
    setTimeout(() => {
      reader.readAsDataURL(file);
    }, 4000);
  };

  renderAction = () => {
    if (this.state.imageUploading) {
      return (
        <div>
          Loading spinner
        </div>
      );
    }
    if (this.state.imageUploaded) {
      return (
        <div>
          Your image was uploaded.
          <div>
            <button onClick={this.resetState}>
              Upload Another Image
            </button>
          </div>
        </div>
      );
    }

    // Otherwise return the image form
    return (
      <form
        enctype="multipart/form-data"
        onSubmit={this.handleImageSubmit}
      >
        <span className="image-error">
          {this.state.imageError}
        </span>
        <input
          type="file"
          name="displayImage"
          onChange={this.handleImageChange}
        />
      </form>
    );
  };

  render() {
    console.log('Rendering ContentUploadSidebar');
    return (
      <div className="sidebar-content-upload-container">
        <h3>Book Image Manager</h3>
        {this.renderAction()}
        <div className="sidebar-content-block">
          <img src="/images/books/1.png" />
          <p>myfile.png</p>
        </div>
        <div className="sidebar-content-block">
          <img src="/images/books/1.png" />
          <p>myfile.png</p>
        </div>
      </div>
    );
  }

}

export default ContentUploadSidebar;
