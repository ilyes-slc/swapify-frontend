// ProductSwipeList.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductSwiper';
import ProductDataService from "../services/ProductDataService";
import ProductSwiper from "./ProductSwiper";
import Advanced from "./ProductSwiper";
import {useParams} from "react-router-dom";

const ProductSwipeList = () => {
    const [products, setProducts] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        console.log(productId);
        const fetchData = async () => {
            try {
                const response = await ProductDataService.getAll();
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };


        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    return (
        <div className="ProductSwipeList">
            <Advanced products={products} productId={productId} />
        </div>
    );
};

export default ProductSwipeList;
