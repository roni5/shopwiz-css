import React, { Component } from 'react';
import ProductListing from '../presentation/ProductListing';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/actions';

class Products extends Component {
    componentDidMount(){

        var fakeProducts = [{
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe'
        }, {
            id: '2',
            title: 'Owl stowaway',
            teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        }];

        this.props.dispatch(fetchProducts(fakeProducts));
    }
    render() {
        const productsItems = this.props.products.map( (products, i) => {
         return ( <li key={i}><ProductListing data = { products } /></li> );
        });

        return (<div>
                        <div>
                <h2>News Items</h2>
                {(this.props.products.length > 0) ? <ul>{productsItems}</ul> : <div>Sorry we have no news</div>}

            </div>

        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)