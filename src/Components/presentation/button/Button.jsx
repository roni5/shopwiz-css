import styles from './style.css'
import React from 'react';
import CssModules from 'react-css-modules';

class Button extends React.Component{

  render() {
    return (
      <div>
        <button styleName='button'>Click Box </button>
      </div>
    );
  }
}
export default CssModules(Button, styles);