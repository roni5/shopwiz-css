import React, { Component } from 'react';
import styles from './style.css';
import CssModules from 'react-css-modules';
import { Link } from "react-router-dom";
//console.log(styles);



class ThumbNail extends React.Component {
  render() {
    return (
      <div>
        <img styleName='border' src="https://unsplash.it/200?random" height="250" width="200" />
        {this.props.children}
      </div>
    );
  }
}
export default CssModules(ThumbNail, styles);