import React from 'react';
import { productData } from "./productData";
import ProductItem from "../Components/ProductItem";
import "../Styles/product.css";



function Product() {
  return (
    <div className='product'>
        <h1 className="title">Our Products for the day</h1>
        <div className="product-list">
            {productData.map((Item, key) => {
            return(
              <div >
            <ProductItem
                key={key}
                image = {Item.image}
                name = {Item.name}
                price = {Item.price}
                Qty = {Item.Qty} />
                                
              </div>                
            );
            }
            )
        }
        </div>

    </div>
  )
}

export default Product;