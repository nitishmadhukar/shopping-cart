import React, { Component } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
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
          {this.props.products.map(product => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = dispatch => ({
  setProducts(products) {
    dispatch(setProducts(products));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
