import React from 'react';
import styles from './style.css';
import CssModules from 'react-css-modules';

//console.log(styles);



class ThumbNail extends React.Component {
  render() {
    return (
      <div>
        <img styleName='border' src="https://unsplash.it/200?random" height="250" width="200"alt="products"  />
        {this.props.children}
      </div>
    );
  }
}
export default CssModules(ThumbNail, styles);