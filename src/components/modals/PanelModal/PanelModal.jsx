import React from 'react';
import { Style } from 'jassy';
import { panelModalStyle } from './panelModal.style';

class PanelModal extends React.Component {

	static displayName = 'PanelModal';

	constructor(props) {
		super(props);

		this.state = {
			styles: panelModalStyle({ isVisible: this.props.show })
		};
	}

	componentWillReceiveProps = (nextProps) => {
		console.log('received props', nextProps);
		this.setState({
			styles: panelModalStyle( { isVisible: this.props.show })
		})
	};

	handleCloseModal = () => {
		this.setState({
			styles: panelModalStyle({ isVisible: false })
		})
	};

	render() {
		return (
			<div>
				<Style rules={panelModalStyle()} />
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

export default PanelModal;
