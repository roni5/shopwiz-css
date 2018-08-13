import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';



class ProductDetail extends Component {
    render() {

        return (
            <div>
            <section>
                <h2>PD {this.props.data.title}</h2>
                <p>{this.props.data.body}</p>
            <p> <NavLink to="/">Back</NavLink> </p>
                </section>
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