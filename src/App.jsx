import React, { Component } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

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
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <div>
          {this.state.products.map(product => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
