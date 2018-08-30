import React, { Component } from 'react';
import Modal from './Modal'

export const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

export const mainStyle = {
	app: {
		margin: "100px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};

 export default class NewModal extends React.Component {
	constructor(props) {
		super(props);

		// set initial state
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};

		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	// close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

	// render app
	render() {
		return (
			<div style={mainStyle.app}>
				<button style={mainStyle.button} onClick={this.openModal}>
					Open modal
				</button>

				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
					<img
						width="100%"
						style={{ borderRadius: 3 }}
						src="https://source.unsplash.com/random"
						alt="unsplash"
					/>

					<button
						style={{
							...mainStyle.button,
							margin: 0,
							width: "auto",
							marginTop: 10
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal>
			</div>
		);
	}
}
