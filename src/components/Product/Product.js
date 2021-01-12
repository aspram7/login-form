import React from "react";

import "./Product.scss";

const Product = ({ img, title, author, description, price }) => {
    return (
        <div className="product">
            <div>
                <img src={img} alt={title} />
            </div>
            <div className="product-text">
                <h4>{title}</h4>
                <h6>{author}</h6>
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default Product;
