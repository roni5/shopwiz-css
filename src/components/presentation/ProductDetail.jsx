import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  ProductsNews  from '../containers/ProductsNews';
//<h2> {this.props.data.title}</h2>
//<p>{this.props.data.body}</p>
import PropTypes from 'prop-types';



class ProductDetail extends Component {
    render() {

        return (
            <div>

<h2> {this.props.data.title}</h2>
<p>{this.props.data.body}</p>
                <p> <NavLink to="/">Back</NavLink> </p>
            </div>
        )
    }
}

ProductDetail.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default ProductDetail;