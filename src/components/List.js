// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Product from './Product'

// export class List extends Component {
//   render() {
//     const {products} = this.props;
//     return (
//       <div className="panel panel-primary">
//         <div className="panel-heading">
//           <h1 className="panel-title">List Products</h1>
//         </div>
//         <div className="panel-body" id="list-product">
//           {products.map((value, index)=>{     
//             return <Product key={index} item={value} />;
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//     products : state.products
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(List)


import React, { Component } from 'react'

export class List extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {children}
        </div>
      </div>
    )
  }
}

export default List;


