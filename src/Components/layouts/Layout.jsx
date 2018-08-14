import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';




class Layout extends Component {
    render() {
        return (
            <nav >
                <div />
                <NavLink to="/">
                    <span  styleName='siteHeader'> {'\u2728'} Shopwiz.net {'\u2728'}</span>

                </NavLink>
                <ul>
                    <li ><NavLink to={'/'} styleName="active"> {'\u1f1e'} Home</NavLink></li>
                    <li><NavLink to={'/products/'} styleName="active"> Tshirts</NavLink></li>
                    <li><NavLink to={'/page'} styleName="active">Product Page </NavLink></li>
                    <li><NavLink to={'/about'} styleName="active">About </NavLink></li>
                </ul>
                <div>
                    {this.props.children}

                </div>
            </nav>

        );
    }
}

export default CssModules(Layout, n)