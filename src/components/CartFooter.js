import React, { Component } from "react";
import { connect } from "react-redux";

export class CartFooter extends Component {
  render() {
    const {cart} = this.props;
    
    //Count Quantity
    let countQuantity = 0;
    cart.forEach(element => {
      countQuantity += element.quantity;
    });

    //Count Subtotal
    let countSubtotal = 0;
    cart.forEach(element => {
      countSubtotal += element.price * element.quantity;
    });

    let detail = <tr>
                  <th colSpan={6}>Empty product in your cart</th>
                </tr>;
    if(cart.length !== 0){
      detail = <tr>
                <td colSpan={4}>
                  There are <b>{countQuantity}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  {countSubtotal} USD
                </td>
              </tr>;
    } 
  
    return (
      <tfoot id="my-cart-footer">
        {detail}
      </tfoot>
    );
  }
}

const mapStateToProps = state => ({
    cart : state.cart
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartFooter);
