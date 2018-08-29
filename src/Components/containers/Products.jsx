import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProductListing from '../presentation/ProductListing';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/actions';
//import LoadingIcon from '../presentation/icon/LoadingIcon';
//import { fetchProductsItem } from '../../actions/actions';
import Clearfix from '../layouts/theme/Clearfix';
import detail from  '../presentation/img/detail.png';

class Products extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    render() {
        const productsItems = this.props.products.map((products, i) => {
            return (<li key={i}><ProductListing data={products} /></li>);
        });

        return (
            <div>
                <div>
                    {(this.props.products.length > 0) ? <ul>{productsItems}</ul> : <div>
                      <Clearfix />
                        <ul>
                            <li>Sorry No Stock ! </li>
                            <li>-----------</li>
                            <li> ScrapBook using React CssModule</li>
                            <li> Mern Stack Mongo DB is Live </li>
                            <li> Not a Stateless deconstruction exercise </li>
                            <li>-----------</li>
                            <li><img src={detail} alt="productview" /></li>
                            </ul>
                            <div></div>
                            <Clearfix />

                            <p> <NavLink to="/page">Contact</NavLink> </p>
                        </div>}

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