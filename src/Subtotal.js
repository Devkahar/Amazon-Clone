import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal(props) {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({props.length} item): <strong>{props.value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"$"}
            />
            <button>Procced To Checkout</button>
        </div>
    )
}

export default Subtotal
