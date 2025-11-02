import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-img"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
