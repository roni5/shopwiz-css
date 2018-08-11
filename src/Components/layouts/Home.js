import React, {Component} from 'react';
import Products from '../containers/Products';
import CssModules from 'react-css-modules';
import styles from './style.css';

class Home extends Component {
    render() {
        return (
            <div styleName='centralized-container'>
                <div><Products />git 
                </div>

            </div>
        )
    }
}
export default CssModules(Home, styles);
