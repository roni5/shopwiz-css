import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Products from '../containers/Products';

class ProductListing extends Component {
    render() {
        return (
            <div>
            <div><Link to={`/products/${this.props.data.id}`}> <h3>{this.props.data.title} </h3></Link></div>
            <div><p> {this.props.data.teaser} </p></div>
            </div>
        )
    }
}

ProductListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
};

export default ProductListing;