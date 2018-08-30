

import React, { Component } from 'react'
import { render } from "react-dom"
import PropTypes from 'prop-types'
import ReModal, {modalStyle, mainStyle} from './NewModal'

export default class Modal extends React.Component {
	static propTypes = {

	};

	constructor(props) {
		super(props);

		this.outerStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		this.style = {
				position: "fixed",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.5)",
		};
	}

	// render modal
	render() {
		return (
			<div
				style={{
					...this.outerStyle,
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div style={this.style.overlay} onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div style={this.style.modal}>{this.props.children}</div>
			</div>
		);
	}
}
