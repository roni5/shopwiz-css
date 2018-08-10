import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductListing extends Component {
    render() {
        return (
            <div>
<div><Link to={`/product/${this.props.id}`}><b>{this.props.title}</b></Link></div>
            <div>{this.props.teaser}</div>
            </div>
        )
    }
}

ProductListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
};

export default ProductListing;