import React, { Component } from "react";
import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { connect } from "react-redux";
import { setProducts } from "./actionCreators";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/get-items")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.setProducts({ products: data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <div>
          <ProductsContainer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setProducts(products) {
    dispatch(setProducts(products));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
