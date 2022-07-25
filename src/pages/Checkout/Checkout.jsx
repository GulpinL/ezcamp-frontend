import React from 'react'
import "./Checkout.sass"
import { productList } from "../../common/productList/productList"
import { CartItem } from '../../components'

const Checkout = () => {
    const cartList = productList.slice(0, 3)
    return (
        <div id='checkout-page' className='mobile-checkout'>
            <div className="checkout-container">
                {cartList.map((item, index) => {
                    return <CartItem key={index} {...item} />
                })}
            </div>
        </div>
    )
}

export default Checkout