import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';
import Footer from './footer/Footer';
import Clearfix from './theme/Clearfix';
//import PhotoGrid from "./photo/photogrid";
//import Single from "./photo/single";
//import Photo from "./photo/Photo";




class Layout extends Component {
    render() {
        return (
            <div>
            <nav >
                <ul>
                    <li> <NavLink to="/" styleName='siteHeader'>  {'\u2728'} Shopwiz </NavLink></li>
                    <li ><NavLink to={'/'} styleName='siteHeader'> Home</NavLink></li>
                    <li><NavLink to={'/contact'} styleName='siteHeader'>Contact </NavLink></li>
                    <li><NavLink to={'/about'} styleName='siteHeader'>About </NavLink></li>
                </ul>
                <div>
                    {this.props.children}

                </div>
                </nav>
                <div styleName='bottom'>
                    <Footer />
                </div>
                <Clearfix />
                </div>
        );
    }
}

export default CssModules(Layout, n)