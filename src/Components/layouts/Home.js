import React, {Component}
from 'react';
import News from '../containers/About';
import base from './base.css';

class Home extends Component {
    render() {
        return (
        <div>
            <div><h1>Welcome to Shopwiz.net {'\u2728'} </h1></div>
            <div>
                <News />
            </div>
        </div>
        )
    }
}

export default Home;