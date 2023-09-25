import React from "react";
import '../styles/components/Products.css';
import ProdCard from "./components/ProdCard";
import product1 from '../assets/product1.svg';
import product2 from '../assets/product2.svg';
import product3 from '../assets/product3.svg';
import product4 from '../assets/product4.svg';

const Products = () => {
    return (
        <div className="products">
            <h2 className="products-h2">Товари</h2>
            <div className="products-list">
                <ProdCard 
                    photo = {product1}
                    product-name = "E-sports -Чорний"
                    product-price = "7600 грн"
                />
                <ProdCard 
                    photo = {product2}
                    product-name = "E-sports-Білий"
                    product-price = "7700 грн"
                />
                <ProdCard 
                    photo = {product3}
                    product-name = "E-sports  Pro"
                    product-price = "8900 грн"
                />
                <ProdCard 
                    photo = {product4}
                    product-name = "E-sports-Червоний"
                    product-price = "8000 грн"
                />
            </div>
        </div>
    )
}

export default Products;