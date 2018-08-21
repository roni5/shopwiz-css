import React, { Component } from 'react';
import Products from '../containers/Products';
import ProductDetail from '../presentation/ProductDetail';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import { Kart } from '../presentation/kart/Kart';
import { Theme } from './theme/Theme';
import Sticky from '../presentation/button/Sticky';
import Icon from '../presentation/icon/Icon';
import Link  from '../presentation/icon/Link';
import Click from '../presentation/icon/Click';
import styles from './style.css';
import Clearfix from './theme/Clearfix';

//import logo from './logo.png'; // Tell Webpack this JS file uses this image
//console.log(logo); // /logo.84287d09.png

class Home extends Component {
    render() {
        return (
            <div >
                <span><Click /> </span> <span><Link href={'https://www.linkedin.com/in/ronimcguinness/'} /> </span>
                <div><p>The Mongo DB is Live So No Products</p> </div>
                <Clearfix />
                <div stylesName="img">
                    <Sticky logoUrl={'http://res.cloudinary.com/shopwiz-net/image/upload/c_scale,w_325/v1534764386/shopwiz-new-logo8_1.png'} alt={'logo'} />


                    <section>
                        <Theme />
                        <Products />
                        <Clearfix />
                    </section>
                    <Clearfix />
                </div>
                <Clearfix />

            </div>
        )
    }
}
export default CssModules(Home, styles);
