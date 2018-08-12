import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';




class Layout extends Component {
    render() {
        return (
            <nav >
                <div class="icon icon-white" />
                <Link to="/">
                    <span  styleName='siteHeader'> {'\u2728'} Shopwiz.net {'\u2728'}</span>

                </Link>
                <ul>
                    <li ><Link to={'/'}> {'\u1f1e'} Home</Link></li>
                    <li><Link to={'/products'}> Tshirts</Link></li>
                    <li><Link to={'/about'}>About </Link></li>
                </ul>
                <div>
                    {this.props.children}

                </div>
            </nav>

        );
    }
}

export default CssModules(Layout, n)