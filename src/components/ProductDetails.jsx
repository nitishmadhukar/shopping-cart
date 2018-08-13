import React from "react";
import { UncontrolledCarousel, Badge } from "reactstrap";
import AddToCart from "./AddToCart";
import { connect } from "react-redux";

const ProductDetails = ({ title, description, price, images, reviews, inStock }) => {
  const items = images.map((image, index) => ({
    src: image,
    altText: `Image ${index}`,
    caption: `Image ${index}`
  }));

  const rating = reviews
    .map(review => review.rating)
    .reduce((total, rating) => Math.round((total + rating) / reviews.length));

  return (
    <div className="row">
      <div id="images" className="col-md-6">
        <UncontrolledCarousel items={items} />
      </div>
      <div id="details" className="col-md-6">
        <h2>{title}</h2>
        <div>
          {description}{" "}
          <span>
            Rating: {rating}
            /5
          </span>
        </div>
        <div>
          Price: ${price} <Badge color={inStock ? "success" : "danger"}>{inStock ? "In Stock" : "Out of Stock"}</Badge>
        </div>
        <AddToCart {...{ title, description, price, images, reviews, inStock }} />
      </div>
    </div>
  );
};

export default ProductDetails;
