import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom';

class Products extends Component {
    render(){
        return (
            <section>
                <h1>T-Shirts</h1>
                <ul>
                    <li><img src="https://unsplash.it/200?random" height="200" width="200"/></li>
                    <li><img src="https://unsplash.it/201?random" height="200" width="200"/></li>
                </ul>
            <p> <NavLink to="/">Back</NavLink> </p>
           </section>

        )
    }
}

export default Products;