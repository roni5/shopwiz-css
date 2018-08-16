import React, { Component} from 'react';
import ProductDetail from '../presentation/ProductDetail';
import { connect } from 'react-redux';
import { fetchProductsItem , productsItemLoading } from '../../actions/actions';


class ProductsNews extends Component {


    componentDidMount(){
        this.props.dispatch(fetchProductsItem(this.props.match.params.id));
    }

    render(){
        let { productsItem } = this.props;

        return (
            <div>
                <h2>Products News </h2>
                <ul>
                    <li>Shopwiz.net</li>
                  <li>  { !this.props.productsItemLoading ? <ProductDetail data={productsItem} /> : null} </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsItem: state.products.productsItem,
        productsItemLoading: state.products.productsItemLoading
    }
}

export default connect(mapStateToProps)(ProductsNews)