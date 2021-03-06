import React, { Component } from 'react';
import Products from '../containers/Products';
import ProductDetail from '../presentation/ProductDetail';
import CssModules from 'react-css-modules';
import Button from '../presentation/button/Button';
import { Kart } from '../presentation/kart/Kart';
//import { Theme } from './theme/Theme';  <Theme />   .ccs.js
//import Sticky from '../presentation/button/Sticky';  <Sticky logoUrl={'http://res.cloudinary.com/shopwiz-net/image/upload/c_scale,w_325/v1534764386/shopwiz-new-logo8_1.png'} alt={'logo'} />
import Image from '../presentation/button/Image';
//import MyImage from '../presentation/button/MyImage';  <MyImage alt={'Shopwiz.net'}  src={'http://placekitten.com/g/64/64'}/>
import Icon from '../presentation/icon/Icon';
import Git from '../presentation/icon/Git';
//import IconShare from '../presentation/icon/IconShare';
import styles from './style.css';
import Clearfix from './theme/Clearfix';
import Properties from '../presentation/listings/Properties';
import  {FaceShare} from '../presentation/listings/Share';
import IconShare from '../presentation/icon/IconShare';
import Toggle from '../presentation/toggle/Toggle';
import ShareIt from '../presentation/icon/ShareIt';
import SimpleUsage from '../presentation/button/SimpleUsage';
import BasicModal from '../presentation/button/BasicModal';
import CustomStyling from '../presentation/button/CustomStyling';
import NewModal from '../presentation/modal/NewModal';
//import OuterClick from '../presentation/toggle/OuterClick';


class Home extends Component {
    //let src = 'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg';

    render() {
        return (
            <div stylesName='centralized-container'>
                <span> <Git /> </span>
                <Clearfix />

                <div>
                <div stylesName="img">
                        <Image src={'http://res.cloudinary.com/shopwiz-net/image/upload/c_scale,w_325/v1534764386/shopwiz-new-logo8_1.png '} fallbackSrc={'http://placekitten.com/g/64/64'} />
                    </div>
                    <Clearfix />
                    <div stylesName='centralized-container'>
                        <Products />
                        </div>
                    <Clearfix />
                    <Properties />
                    <Clearfix />

                    <div><p> <FaceShare /><ShareIt /></p></div>
                    <Clearfix />

                    <div><p> </p></div>
                    <Clearfix />
                    <NewModal />
                    < BasicModal/>

                    <div><p>  <div><SimpleUsage/> </div> </p></div>
                    <div> <CustomStyling /> </div>
                    <div>  <Toggle /></div>
                </div>
                <Clearfix />

            </div>
        )
    }
}
export default CssModules(Home, styles);
