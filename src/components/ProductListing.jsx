import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    //by using axios to get the data through api
    //using async and await and catch - error
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/")
        .catch(err => {
            console.log("error", err);
        })

        dispatch(setProducts(response.data));
    }

    //once the funciton is created, we will use the useEffect to call the fetchProducts function
    useEffect(() => {
        fetchProducts();
    },[]);

    console.log("Products: ",products);

    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing