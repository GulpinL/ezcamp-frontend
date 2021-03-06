import React from 'react'
import { Link } from 'react-router-dom'
import { useViewport } from '../../customhooks'
import { BsCart3 } from "react-icons/bs";


import "./ProductList.sass"
import { formatPrice } from '../../utils/helper';
import Star from '../Star/Star';

const ProductList = ({ list }) => {
    const viewport = useViewport()
    const isMobileViewport = viewport.width < 1024


    return (
        <section className='product-list-container'>
            <ul className="product-list">
                {list.map((product, index) => {
                    const { name, img, rating, price } = product
                    return <li key={index} className={isMobileViewport ? "product-item w-50" : "product-item w-20"}>
                        <Link to="/" className='product'>
                            <div className="product-img">
                                <img src={img} alt={name} />
                            </div>
                            <div className="product-content">
                                <div className="product-content-top">
                                    <div className="product-name">
                                        {name}
                                    </div>
                                </div>
                                <div className="product-content-bottom">
                                    <div className="product-content-left">
                                        <div className="product-price">{formatPrice(price)}</div>
                                        <div className="product-rating w-50"><Star stars={rating} /></div>
                                    </div>
                                    <div className="product-button">
                                        <button className="btn add-cart-btn">
                                            Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default ProductList

