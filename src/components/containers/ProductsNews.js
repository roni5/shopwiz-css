import React, { Component} from 'react';
import ProductDetail from '../presentation/ProductDetail';
import { connect } from 'react-redux';
import { fetchProductsItem } from '../../actions/actions';

class ProductsNews extends Component {


    componentDidMount(){
        this.props.dispatch(fetchProductsItem(this.props.match.params.id));
    }

    render(){
        let { productsItem } = this.props;

        return (
            <div>
                <h2>New T-Shirts </h2>
                <ul>
                    { productsItem ? <ProductDetail data={productsItem} /> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsItem: state.products.productsItem
    }
}

export default connect(mapStateToProps)(ProductsNews)