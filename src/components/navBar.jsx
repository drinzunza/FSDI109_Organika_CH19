import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import storeContext from "../context/storeContext";
class NavBar extends Component {
  static contextType = storeContext;

  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(22 94 106)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Organika
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Shopping List
                </Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <Link className="btn btn-outline-primary" to="/cart">
                <i aria-hidden="true" className="fa fa-cart-plus mr-1"></i>
                View Cart &nbsp;
                <span className="badge badge-secondary cart-badge">{this.context.cart.length}</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
