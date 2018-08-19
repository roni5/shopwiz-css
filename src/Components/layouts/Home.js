import React, { Component } from 'react';
import Products from '../containers/Products';
import ProductDetail from '../presentation/ProductDetail';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import Hello from '../presentation/Hello';
import { Kart } from '../presentation/kart/Kart';
import { Theme } from './theme/Theme';
import Sticky from '../presentation/button/Sticky';
import Icon from '../presentation/icon/Icon';
import LoadingIcon from '../presentation/icon/LoadingIcon';
import styles from './style.css';

//import logo from './logo.png'; // Tell Webpack this JS file uses this image

//console.log(logo); // /logo.84287d09.png

class Home extends Component {
    render() {
        return (
            <div >
               
                <Icon icon='facebook'/><Hello name='roni'/>
                <div>
                    <Sticky logoUrl={'http://via.placeholder.com/350x150'} alt={'logo'} />
                    <section>
                    <Theme/>
                        <Products />
                        <div className="img">
                            <Sticky logoUrl="https://unsplash.it/201?random" height="200" width="200" alt={'Products'} />
                        </div>
                    </section>
                </div>
               <Icon icon='trash'/>
                <Kart />

            </div>
        )
    }
}
export default CssModules(Home, styles);
