import React, {Component}
from 'react';
import  About from '../containers/About';
import base from './base.css';

class Home extends Component {
    render() {
        return (
          <div>
            <div> <h1 className="logo"> {'\u3282'}</h1></div>
            <div><h1>{'\u1f1e'} Shopwiz.net {'\u2728'} {'\u1f1e'} </h1></div>

            <div>
              <About />

            </div>
        </div>
        )
    }
}

export default Home;