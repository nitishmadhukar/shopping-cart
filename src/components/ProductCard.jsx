import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import ProductDetails from "./ProductDetails";
import AddToCart from "./AddToCart";

const ProductCard = props => {
  const { thumbnail, price } = props;
  return (
    <div>
      <Card>
        <CardImg src={thumbnail} />
        <CardBody>
          <CardTitle>
            <ProductDetails {...props} />
          </CardTitle>
          <CardText>
            <span>Price: ${price}</span>
            <AddToCart {...props} />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
