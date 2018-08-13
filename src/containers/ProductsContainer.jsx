import React from "react";
import ProductCard from "../components/ProductCard";
import { connect } from "react-redux";

const ProductsContainer = props => props.products.map(product => <ProductCard {...product} key={product.id} />);

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(ProductsContainer);
