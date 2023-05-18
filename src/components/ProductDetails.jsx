import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

function ProductDetails() {
    //what i need to do in this page is to fetch the product details of individual product by the id
    //we need the usePara

    const {productId} = useParams();

    const dispatch = useDispatch();

    const targetProduct = useSelector((state) => state.product);

    const [loading, setLoading] = useState(false);


    const fetchProduct = async () => {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=> {
            console.log("Error", err);
        });

        dispatch(selectedProduct(response.data))
        setLoading(false)
    }
    
    useEffect(() => {
        if (productId && productId !== "") {
            fetchProduct();
        }
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    

    return (
        <div>
            {loading ? (<div>Loading</div>) : (targetProduct && loading === false && (
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                    <div className="column lp">
                      <img className="ui fluid" src={targetProduct.image} alt='product'/>
                    </div>
                    <div className="column rp">
                      <h1>{targetProduct.title}</h1>
                      <h2>
                        <p className="ui teal tag label">${targetProduct.price}</p>
                      </h2>
                      <h3 className="ui brown block header">{targetProduct.category}</h3>
                      <p>{targetProduct.description}</p>
                      <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    )
}

export default ProductDetails