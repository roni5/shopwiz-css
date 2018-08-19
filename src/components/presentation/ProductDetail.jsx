import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  ProductsNews  from '../containers/ProductsNews';
//<h2> {this.props.data.title}</h2>
//<p>{this.props.data.body}</p>
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import styles from './style.css';
import  ThumbNail  from './thumbnail/ThumbNail';



class ProductDetail extends Component {
    render() {

        return (
            <div>

<h2 styleName="button"> {this.props.data.title}</h2>
                 <div styleName='photo-grid'>

                    </div>
                <div>  <ThumbNail >   </ThumbNail >  </div>
                <div styleName="control-button">  {this.props.data.body} </div>
                <section>
                <p> <NavLink to="/">Back</NavLink> </p></section>
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