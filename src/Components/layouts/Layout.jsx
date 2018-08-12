import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';




class Layout extends Component {
    render() {
        return (
            <nav >
                <div class="icon icon-white" />
                <NavLink to="/">
                    <span  styleName='siteHeader'> {'\u2728'} Shopwiz.net {'\u2728'}</span>

                </NavLink>
                <ul>
                    <li ><NavLink to={'/'} activeClassName="active"> {'\u1f1e'} Home</NavLink></li>
                    <li><NavLink to={'/products'} activeClassName="current"> Tshirts</NavLink></li>
                    <li><NavLink to={'/about'} activeClassName="current">About </NavLink></li>
                </ul>
                <div>
                    {this.props.children}

                </div>
            </nav>

        );
    }
}

export default CssModules(Layout, n)