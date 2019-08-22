// import React, { Component } from "react";
// import { connect } from "react-redux";
// import CartItem from "./CartItem";
// import CartFooter from "./CartFooter";

// export class Cart extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     const {cart} = this.props;

//     return (
//       <div className="panel panel-danger">
//         <div className="panel-heading">
//           <h1 className="panel-title">Your Cart</h1>
//         </div>
//         <div className="panel-body">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th width="4%">#</th>
//                 <th>Name</th>
//                 <th width="15%">Price</th>
//                 <th width="4%">Quantity</th>
//                 <th width="20%">Subtotal</th>
//                 <th width="25%">Action</th>
//               </tr>
//             </thead>
//             <tbody id="my-cart-body">
//               {cart.map((value, index)=>{     
//                 return <CartItem 
//                           key={index + '-' + value.quantity} 
//                           item={value} 
//                           index={index} 
//                         />;
//               })}
//             </tbody>
//             <CartFooter />
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   cart : state.cart
// });

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cart);


import React, { Component } from "react";
import CartFooter from "./CartFooter";

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {children} = this.props;

    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {children}
            </tbody>
            <CartFooter />
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
