import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const ProductCard = props => {
  const { id, title, thumbnail, price } = props;
  return (
    <div>
      <Card>
        <CardImg src={thumbnail} />
        <CardBody>
          <CardTitle>
            <Link to={`/product/${id}`}>{title}</Link>
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
