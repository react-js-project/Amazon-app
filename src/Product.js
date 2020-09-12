import React from 'react'
import './product.css';
import StarIcon from '@material-ui/icons/Star';

function Product({title ,image ,price ,rating}) {


    const addToBasket=()=>{
        
    }

    return (
        <div className="product">
            <div className="product-info">
                <h3>{title}</h3>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill()
                    .map((_,i)=>(
                        <p><StarIcon/></p>
                    ))}
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    )
}

export default Product
