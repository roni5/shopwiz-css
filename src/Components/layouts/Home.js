import React, {Component}
from 'react';
import About from '../containers/About';
import CssModules from 'react-css-modules';
import styles from './style.css';

class Home extends Component {
    render() {
        return (
          <div styleName='centralized-container'>
            <div > <div styleName='burger'> {'\u3282'}</div></div>
            <div><h1>{'\u1f1e'} Shopwiz.net {'\u2728'} {'\u1f1e'} </h1></div>

            <div>
              <About />

            </div>
        </div>
        )
    }
}
export default CssModules(Home, styles);
