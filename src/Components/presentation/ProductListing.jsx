import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import styles from './style.css';

//console.log(styles);

class ProductListing extends Component {
    render() {
        return (
            <div styleName='grid-photo'>
                <figure styleName="grid-figure">
                <hr/>
                    <div styleName="single-photo"><Link to={`/products/${this.props.data._id}`}>
                        <div styleName="button">{this.props.data.title} </div></Link></div>
            <div><p> {this.props.data.teaser} </p></div>
            </figure>
            </div>

        )
    }
}

ProductListing.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
};

export default (ProductListing) ;