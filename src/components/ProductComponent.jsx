import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ProductComponent() {
    //if using the same reducer, error will occur because the products is used inside the selectProduct action
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const {id, title, price, category, image} = product
        return (
            <div className="four wide column " key={id}>
                <Link to={`product/${id}`}>
                    <div className="ui link cards">
                        <div className="cardbox">
                            <div>
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
          
        <>
            {renderList}
        </>
    );
}

export default ProductComponent