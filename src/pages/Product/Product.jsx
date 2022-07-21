import React from 'react'
import { Filter, ProductList } from '../../components'
import { productList } from '../../common/productList/productList'
import { useViewport } from "../../customhooks"

import "./Product.sass"

const Product = () => {
    const viewport = useViewport()
    const isMobileViewport = viewport.width < 1024
    return (
        <div id="product-page" className={isMobileViewport ? 'pt-100' : ''}>
            <Filter />
            <ProductList list={productList} />
        </div>
    )
}

export default Product