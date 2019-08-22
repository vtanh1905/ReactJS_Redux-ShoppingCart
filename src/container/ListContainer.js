import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import List from './../components/List';
import Product from './../components/Product'

import {addCard, changeNotify} from './../actions/actions'

export class ListContainer extends Component {
    render() {
        const {products} = this.props;
        
        return (
            <List>
                {products.map((value, index)=>{     
                    return <Product 
                                key={index} 
                                item={value}
                                handleBuyProducts={this.props.handleBuyProducts}
                             />;
                })}
            </List>
        )
    }
}

ListContainer.propTypes = {
  handleBuyProducts : PropTypes.func.isRequired,
  //products : PropTypes.array.isRequired,
  products   : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    status : PropTypes.number.isRequired,
  }))
};

const mapStateToProps = (state) => ({
    products : state.products
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleBuyProducts : (item, quantity) => {
        dispatch(changeNotify("Add Successfully"));
        dispatch(addCard(item, +quantity))
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
