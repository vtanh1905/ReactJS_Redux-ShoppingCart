import React, { Component } from "react";

export class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      quantity : 1
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBuyProducts = this.handleBuyProducts.bind(this);
  }
  

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleBuyProducts(item, quantity){
    this.setState({
      quantity : 1
    });
    this.props.handleBuyProducts(item, quantity);
  }

  render() {
    const { item } = this.props;

    let disabledButton = false;
    let inputQuantity  = <input
                        name="quantity"
                        type="number"
                        min={1}
                        value={this.state.quantity} 
                        onChange={this.handleInputChange}
                      />
    if (item.status === 0) {
      disabledButton = true;
      inputQuantity = null;
    }

    return (
      <div className="media product">
        <div className="media-left">
          <button className="btn btn-link">
            <img
              className="media-object"
              src={"images/" + item.image}
              alt="charmander"
              width="100px"
            />
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{item.name}</h4>
          <p>{item.content}</p>
          {inputQuantity}
          <button disabled={disabledButton}  data-product={1} className="btn btn-success" onClick={() => this.handleBuyProducts(item, this.state.quantity)}>
            {" "}
            {item.price} USD{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
