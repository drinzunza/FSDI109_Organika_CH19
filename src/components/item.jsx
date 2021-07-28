import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./item.css";
import storeContext from "../context/storeContext";

class Item extends Component {
  static contextType = storeContext;

  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="item">
        <img src={"/images/products/" + this.props.prod.image} alt="item" />

        <h6>{this.props.prod.title}</h6>

        <div className="prices">
          <label className="info">Total</label>
          <label className="info">Price</label>
          <label className="total-value">${this.getTotal()}</label>
          <label className="price-value">${(+this.props.prod.price || 0).toFixed(2)}</label>
        </div>

        <div className="item-controls">
          <QuantityPicker onValueChange={this.handleQuantityChange}></QuantityPicker>

          <button onClick={this.handleAddButton} className="btn btn-sm btn-light btn-add">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }

  handleAddButton = () => {
    // create a copy of the prod    
    var copy = {
      ...this.props.prod,  // copy every property from prod object
      quantity: this.state.quantity
    };    
    
    // send the copy to cart
    this.context.addProdToCart(copy);
  };

  getTotal = () => {
    let total = this.props.prod.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (quantity) => {
    console.log("Quantity changed", quantity);
    this.setState({ quantity: quantity });
  };
}

export default Item;


/**
 * 
 *   1 - create a component (itemInCart)
 *   2 - map the cart array to the new component
 *   3 - pass the data as prop
 *   4 - in itemInCart read the and display the item info
 * 
 * 
 */