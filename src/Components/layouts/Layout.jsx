import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import n from './nav.css';




class Layout extends Component {
    render() {
        return (
            <nav styleName='centralized-container'>
                <Link to="/">
                    <span styleName='burger'> {'\u2728'} Shopwiz.net {'\u2728'}</span>
                    <div class="icon icon-white" />
                </Link>
                <ul>
                    <li ><Link to={'/'}>{'\u3289'}  Home</Link></li>
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