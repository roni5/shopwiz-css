import React, {Component} from 'react';
import Products from '../containers/Products';
import ProductDetail from '../presentation/ProductDetail';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import { Kart }from '../presentation/kart/Kart';
import styles from './style.css';

class Home extends Component {
    render() {
        return (
            <div styleName='centralized-container'>
                <div>
                    <section>
                        <h1>Products</h1>
                        <Products />
                        <div className="img">
                            <img src="https://unsplash.it/200?random" height="200" width="200" />
                            <img src="https://unsplash.it/201?random" height="200" width="200" />
                        </div>

                    </section>
                </div>
                <Kart />
                <Button />
            </div>
        )
    }
}
export default CssModules(Home, styles);
