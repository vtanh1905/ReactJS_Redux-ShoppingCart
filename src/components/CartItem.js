import React, { Component } from 'react'

export class CartItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity : props.item.quantity
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }

  render() {
    const {index, item} = this.props;


    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.price} USD</td>
        <td>
          <input
            name="quantity"
            type="number"
            min={1}
            value={this.state.quantity} 
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <strong>{item.price * this.state.quantity} USD</strong>
        </td>
        <td>
          <button className="label update-cart-item btn btn-info" data-product onClick={() => this.props.handleUpdateCart(item, this.state.quantity)}>
            Update
          </button>
          <button
            className="label delete-cart-item btn btn-danger"
            data-product
            onClick={() => this.props.handleDeleteCart(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem
