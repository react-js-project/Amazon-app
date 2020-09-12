import React from 'react'
import './checkout.css';
import Subtotal from './Subtotal';
import Product from './Product';

const Checkout = () => {
    return (
        <div className="checkout">
           <div className="checkout-left">
                <img className="ckeckout-add" src="https://images.freekaamaal.com/post_images/1576047645.png" />
                <div className="checked-title">
                    <h2>Your Shopping Basket</h2>
                    <div className="product">
                        <Product
                            title="Pick from these types of masks" 
                            image="https://www.washingtonpost.com/resizer/jQXNYb0CCDwBqoHOn9uvy2lW2FY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YGKWCWKR4NAW7LHYDHTM64ES44.jpg"
                            price={20.1} 
                            rating={5}
                        />
                    </div>
                </div>
           </div> 
           <div className="checkout-right">
                <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout
