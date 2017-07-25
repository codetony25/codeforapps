import React from 'react';
import { Style } from 'jassy';
import { modalLanguageStyles } from './modal_styles';

class ModalLanguage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: modalLanguageStyles({ isVisible: this.props.show })
    };

    this.displayName = 'ModalLanguage';
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('received props', nextProps);
     this.setState({
       styles: modalLanguageStyles( { isVisible: this.props.show })
     })
  };

  handleCloseModal = () => {
    this.setState({
      styles: modalLanguageStyles({ isVisible: false })
    })
  };

  render() {
    return (
      <div>
        <Style rules={this.state.styles} />
        <div className="modal-language">
          <div>
            <label htmlFor="language">Programming Language: </label>
            <input
              type="text"
              id="language"
              className="language input-default" />
          </div>
          <div>
            <label htmlFor="file-name">File Name: </label>
            <input
              type="text"
              id="file-name"
              className="file-name input-default" />
          </div>
          <button>Submit</button>
          <button onClick={() => this.handleCloseModal}>Close</button>
        </div>
      </div>
    );
  }

}

export default ModalLanguage;
