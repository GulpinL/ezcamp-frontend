import React from 'react'
import { Advertisement, Category } from '../../components'

import "./Home.sass"

const Home = () => {
  return (
    <div id="home-page">
      <Advertisement />
      <Category />
    </div>
  )
}

export default Home