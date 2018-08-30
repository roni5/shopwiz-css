import React, { Component } from 'react';
import Icon from '../icon/Icon';
const customStyles = {
  backgroundColor: 'rgba(0, 0, 0,0.5)',
  listStyles: 'none',
  textDecoration: 'none',
  border: 'none',
  display: 'inline',
  transform: 'translate(-50%, -50%)'
};

const Share = ({ href}) => (
  <a  style={customStyles} href={href}  target="_blank" rel="noopener noreferrer">
    <span><Icon icon='facebook'/></span>
  </a>
);
export const FaceShare = () => (
  <Share
    href="http://facebook.com/shopwiz.net"
    text="Facebook >>"
  />
);

export default Share;
