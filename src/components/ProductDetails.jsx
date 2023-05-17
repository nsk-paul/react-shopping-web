import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productActions';

function ProductDetails() {
    //what i need to do in this page is to fetch the product details of individual product by the id
    //we need the usePara
    const {productId} = useParams();

    const dispatch = useDispatch();

    const targetProduct = useSelector((state) => state.allProducts.products);


    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=> {
            console.log("Error", err);
        });

        dispatch(selectedProduct(response.data))
        
    }
    
    useEffect(()=>{
        fetchProduct();
        
    },[productId])

    

    return (
        <div>
            {targetProduct.id}
        </div>
    )
}

export default ProductDetails