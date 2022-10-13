import React from "react";
import "./ProductsDetails.css";
import NavBar from "../navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useEffect , } from "react";
import { productDetails } from "../../redux/action";


const ProductsDetails = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetails);
    useEffect(() => {
        dispatch(productDetails(id));
    }
    , [dispatch,id]);
    // console.log(product.image);
    return (
        <div>
            <NavBar />
            <div className="productDetails">
                <div className="details">
                    <h1>{product.name}</h1>
                    <img src={product.image} alt="product" />
                    <h3>Description: {product.description}</h3>
                    <h4>Ingredients: {product.ingredients.map((ingredient) => ingredient + ", ")}</h4>
                    <h4>Category: {product.category}</h4>
                    <h4>Origin: {product.originCountry}</h4>
                    <h4>Stock: {product.stock}</h4>
                    <h2>Price $ {product.price}</h2>
                </div>
                <button className="productDetails__button">Add to cart</button>
                <button className="productDetails__button">Buy now</button>

            </div>
        </div>
    )

}

export default ProductsDetails;
