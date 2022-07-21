import React, { useState } from 'react'
import { Advertisement, Category, ProductList } from '../../components'
import {
  productList
} from '../../common/productList/productList'
import { BiCaretDown } from "react-icons/bi";
import "./Home.sass"
import { useViewport } from '../../customhooks';

const Home = () => {
  const viewport = useViewport()
  const isMobileViewport = viewport.width < 1024

  const [list, setList] = useState(productList.slice(0, 5))
  const handleDisplayList = () => {
    setList(productList.slice(0, list.length + 10))
  }
  return (
    <div id="home-page" className={isMobileViewport ? 'pt-100' : ''}>
      <Advertisement />
      <Category />
      <ProductList list={list} />
      <div className="show-more-container">
        <button className='btn show-more-btn' onClick={handleDisplayList}>Show more <BiCaretDown /> </button>
      </div>
    </div>
  )
}

export default Home