import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';




class Layout extends Component {
    render() {
        return (
            <nav >
                <ul>
                    <li> <NavLink to="/" styleName='siteHeader'>  {'\u2728'} Shopwiz.net </NavLink></li>
                    <li ><NavLink to={'/'} styleName='siteHeader'> {'\u1f1e'} Home</NavLink></li>
                    <li><NavLink to={'/contact'} styleName='siteHeader'>Contact </NavLink></li>
                    <li><NavLink to={'/about'} styleName='siteHeader'>About </NavLink></li>
                </ul>
                <div>
                    {this.props.children}

                </div>
            </nav>

        );
    }
}

export default CssModules(Layout, n)