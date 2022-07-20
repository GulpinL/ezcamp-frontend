import React from 'react'
import { Advertisement, Category, ProductList } from '../../components'
import {
  productList
} from '../../common/productList/productList'

import "./Home.sass"

const Home = () => {
  return (
    <div id="home-page">
      <Advertisement />
      <Category />
      <ProductList list={productList} />
    </div>
  )
}

export default Home