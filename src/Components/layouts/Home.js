import React, {Component} from 'react';
import Products from '../containers/Products';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import styles from './style.css';

class Home extends Component {
    render() {
        return (
            <div styleName='centralized-container'>
                <div><Products />
                    <section>
                        <h1>Products</h1>
                        <img src="https://unsplash.it/200?random" height="200" width="200" />
                        <img src="https://unsplash.it/201?random" height="200" width="200" />

                    </section>
                </div>
                <Button> Welcome </Button>
                            </div>
        )
    }
}
export default CssModules(Home, styles);
