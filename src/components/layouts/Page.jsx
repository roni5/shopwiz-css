import React, {Component} from 'react';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import ProductsSubmit from '../containers/ProductsSubmit';
import Icon from '../presentation/icon/Icon';
import styles from './style.css';

class Page extends Component {
    render() {
        return (
          <div styleName='centralized-container'>
            <div>
              <h5> <span><Icon icon='email'/> </span><span>Sales@Shopwiz.net</span></h5>

              <div styleName='centralized-container'>

                <img src="https://unsplash.it/200?random" height="200" width="200" />
              </div>
            </div>
          </div>
        )
    }
}
export default CssModules(Page, styles);