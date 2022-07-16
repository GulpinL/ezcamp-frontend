import React, { useState } from 'react'
import { BsSearch, BsCart3, BsCaretDown } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "./Navbar.sass"

const Navbar = () => {
  const [accountName, setAccountName] = useState("")
  const [cartAmount, setCartAmount] = useState(4)

  return (
    <nav id = "navbar">
      <div className="navbar-container">
        <Link to ="/" className="navbar-brand">
          <img src="/img/brand_logo.png" alt="" className="logo-brand" />
        </Link>
        <div className="navbar-search">
          <input type="text" className="search-box" placeholder='Tent, hand, stove, ...'/>
          <button className='btn search-btn'>
            <BsSearch className='search-icon'/>
            Search
          </button>
        </div>
        <div className="navbar-account">
          {accountName !== "" ? <div className='account'>
            <FiUser className="account-icon"/>
            <div className="account-info">
              <p>Account</p>
              <div className="account-name">
                <p className='name'>{accountName}</p>
                <BsCaretDown className='account-down-icon'/>
              </div>
            </div>
          </div> : 
          <button className='btn login-btn'>Login</button>}
        </div>
        <div className="navbar-cart">
          <div className="cart">
            <BsCart3 className='cart-icon'/>
            <div className="cart-amount">{cartAmount}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar