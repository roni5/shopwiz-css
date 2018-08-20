import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import styles from './style.css';

//console.log(styles);

class ProductListing extends Component {
    render() {
        return (
            <div>
            <div styleName='photo-grid'>
                    <div  styleName='photo-grid'><Link to={`/products/${this.props.data._id}`} >
                        <img   styleName='photo-grid' src="https://res.cloudinary.com/shopwiz-net/image/upload/v1534764357/more-trees-03.png" height="250" width="300" />
                        <div styleName="button">{this.props.data.title} </div></Link>
                    <div>
               </div></div>
                <div styleName="labelbox">
                <h3> {this.props.data.teaser} </h3>
                    </div>
                    </div>
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

export default CssModules(ProductListing, styles) ;