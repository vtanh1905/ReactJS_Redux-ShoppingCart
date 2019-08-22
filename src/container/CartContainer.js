import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from './../components/Cart';
import CartItem from "./../components/CartItem";
import {deleteCart, updateCart,changeNotify} from './../actions/actions'

export class CartContainer extends Component {
    render() {
        const {cart} = this.props;
        return (
            <Cart>
                {cart.map((value, index)=>{     
                    return <CartItem 
                            key={index + '-' + value.quantity} 
                            item={value} 
                            index={index}
                            handleDeleteCart={this.props.handleDeleteCart}
                            handleUpdateCart={this.props.handleUpdateCart}
                            />;
                })}
            </Cart>
        )
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleDeleteCart : (id) => {
        dispatch(changeNotify("Delete Successfully"));
        dispatch(deleteCart(id));
      },
      handleUpdateCart : (item, quantity) => {
        dispatch(changeNotify("Update Successfully"));
        dispatch(updateCart(item, quantity));
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
