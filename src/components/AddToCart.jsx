import React, { Component } from "react";
import { Button } from "reactstrap";

class AddToCart extends Component {
  state = {
    quantity: 0
  };

  handleInputChange = event => this.setState({ quantity: event.target.value });

  render() {
    const { inStock } = this.props;
    return (
      <span>
        <input type="text" placeholder="Qty" disabled={!inStock} onChange={this.handleInputChange} />
        <Button color="warning" disabled={!inStock} onClick={() => alert(this.state.quantity)}>
          Add To Cart
        </Button>
      </span>
    );
  }
}

export default AddToCart;
