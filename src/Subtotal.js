import React from 'react'
import './subtotal.css';
import CurrencyFormate from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormate
                renderText={(value)=>(
                    <>
                    <p>Subtotal (0 items): <strong>0</strong> </p>
                    <small className="subtotal-gift">
                        <input style={{margin:5}} type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousendSeprater={true}
                prefix={"$"}
            />
            <button>proceed to chackout</button>
        </div>
    )
}

export default Subtotal
