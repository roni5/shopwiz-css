import styles from './style.css'
import React from 'react';
import CssModules from 'react-css-modules';

class Button extends React.Component{

  render(){
    return (
      <button styleName='button'><strong>Enter Button</strong></button>
    );
  }
}
export default CssModules(Button, styles);