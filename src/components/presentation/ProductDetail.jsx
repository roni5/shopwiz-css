import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class ProductDetail extends Component {
    render() {

        return (
            <section>
                <h1>T-Shirts</h1>
                <ul>
                    <li><img src="https://unsplash.it/200?random" height="200" width="200" alt="t-shirts"/></li>
                    <li>This is Out of Stock</li>
                </ul>
            <p> <NavLink to="/">Back</NavLink> </p>
           </section>

        )
    }
}

export default ProductDetail;