import React, { Component } from 'react';
import ProductListing from '../presentation/ProductListing';

class Products extends Component {
    render() {
        return (<div>
            <h2>Products Item</h2>
            <ul>
                <li><ProductListing id="1" title="T-shirts Women" teaser="Idiom" /></li>
                <li><ProductListing id="2" title="T-shirts Men" teaser="Letters without Sense" /></li>
            </ul>
        </div>
        )
    }
}

export default Products