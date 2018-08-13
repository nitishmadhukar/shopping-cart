import React from "react";
import ProductDetails from "../components/ProductDetails";
import { connect } from "react-redux";

const ProductContainer = ({ product }) => <ProductDetails {...product} />;

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(product => product.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(ProductContainer);
