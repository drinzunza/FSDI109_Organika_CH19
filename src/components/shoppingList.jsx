import React, { Component } from "react";
import storeContext from "../context/storeContext";

class ShoppingList extends Component {
  static contextType = storeContext;

  state = {};
  render() {
    return (
      <div className="shopping-list">
        <div className="capture">
          <input type="text" />
          <button>Add to list</button>
        </div>
      </div>
    );
  }

  handleAddToList = () => {
    this.context.addToShoppingList("The text from the input here");
  };
}

export default ShoppingList;

/**
 *
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */
