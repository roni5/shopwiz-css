import React, { Component} from 'react';
import ProductDetail from '../presentation/ProductDetail';
import { connect } from 'react-redux';
import { fetchProductsItem, productsItemLoading } from '../../actions/actions';
import LoadingIcon from '../presentation/icon/LoadingIcon';


class ProductsNews extends Component {


    componentDidMount(){
        this.props.dispatch(fetchProductsItem(this.props.match.params.id));
    }

    render(){
        let { productsItem } = this.props;

            if (this.props.productsItemLoading ) {
              return   <LoadingIcon />;
            }

        return (
            <div>
                <h2>  {!this.props.productsItemLoading ? <ProductDetail data={productsItem} /> : null} </h2>
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