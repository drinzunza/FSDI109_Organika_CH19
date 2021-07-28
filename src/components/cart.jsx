import React, { Component } from "react";
import storeContext from "../context/storeContext";
import ItemInCart from "./itemInCart";
import "./cart.css";
import ItemService from "./../services/itemService";

class Cart extends Component {
  static contextType = storeContext;

  state = {
    couponCode: "",
    discount: 0,
  };

  render() {
    return (
      <div className="cart-page">
        <h4>This is the cart</h4>

        <div className="product-container">
          {this.context.cart.map((prod) => (
            <ItemInCart key={prod._id} prod={prod}></ItemInCart>
          ))}
        </div>

        <div className="total-container">
          <div>Total: {this.getTotal()}</div>
          <div>
            <input type="text" name="couponCode" value={this.state.couponCode} onChange={this.handleInputChange} placeholder="Discount code"></input>

            <button onClick={this.validateCode} className="btn btn-sm btn-dark">
              Validate code
            </button>
          </div>
        </div>
      </div>
    );
  }

  validateCode = async () => {
    let service = new ItemService();
    let res = await service.validateCode(this.state.couponCode);
    console.log(res);
    if (res.error) {
      alert("Invalid Code");
    } else {
      console.log("You got a discount for" + res.discount + "%");
      // TODO: apply the discount to the total (decrease total)
      this.setState({ discount: res.discount });
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getTotal = () => {
    let total = 0;
    for (let i = 0; i < this.context.cart.length; i++) {
      let product = this.context.cart[i];
      total += product.quantity * product.price;
    }

    return (total - this.state.discount).toFixed(2);
  };
}

export default Cart;
