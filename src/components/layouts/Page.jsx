import React, {Component} from 'react';
import Products from '../containers/Products';
import ProductDetail from '../presentation/ProductDetail';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';

import styles from './style.css';

class Page extends Component {
    render() {
        return (
          <div styleName='centralized-container'>
            <div>
              <h1>ProductDetail</h1>
             
              <div StyleName="img">
                <img src="https://unsplash.it/200?random" height="200" width="200" />
              </div>
            </div>
          </div>
        )
    }
}
export default CssModules(Page, styles);