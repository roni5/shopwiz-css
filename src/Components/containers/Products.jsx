import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProductListing from '../presentation/ProductListing';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/actions';
//import { fetchProductsItem } from '../../actions/actions';

class Products extends Component {

    componentDidMount(){
        this.props.dispatch(fetchProducts());
    }
    render() {
        const productsItems = this.props.products.map( (products, i) => {
         return ( <li key={i}><ProductListing data = { products } /></li> );
        });

        return (<div>
                        <div>
                <h2>product page</h2>
                {(this.props.products.length > 0) ? <ul>{productsItems}</ul> : <div> <ul>
                    <li>Sorry No Stock ! </li>
                    <p> <NavLink to="/page">Contact</NavLink> </p>
                 </ul>  </div>}

            </div>

        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)