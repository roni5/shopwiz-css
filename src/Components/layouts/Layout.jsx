import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../presentation/button/Button';
class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to={'/'}> Home</Link></li>
                        <li><Link to={'/products'}> Tshirts</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;