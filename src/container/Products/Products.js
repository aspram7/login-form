import React from "react";

import Product from "../../components/Product/Product";
import { productsData } from "../../data-mockup/product-mockup";

import "./Products.scss";

class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="container container-products">
                    {productsData.map((el) => {
                        return <Product img={el.img} title={el.title} author={el.author} description={el.description} price={el.price} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Products;
