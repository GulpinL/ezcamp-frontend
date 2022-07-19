import React, { useState } from 'react'
import { BsSearch, BsCart3, BsCaretDown } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Navbar.sass"

const Navbar = () => {
  const { user } = useSelector(store => store.user)
  const [cartAmount, setCartAmount] = useState(4)
  return (
    <nav id="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/img/brand_logo.png" alt="" className="logo-brand" />
        </Link>
        <div className="navbar-search">
          <input type="text" className="search-box" placeholder='Tent, gloves, stove, ...' />
          <button className='btn search-btn'>
            <BsSearch className='search-icon' />
            Search
          </button>
        </div>
        <div className="navbar-account">
          {user.account !== "" ? <div className='account'>
            <FiUser className="account-icon" />
            <div className="account-info">
              <p>Account</p>
              <div className="account-name">
                <p className='name'>{user.account}</p>
                <BsCaretDown className='account-down-icon' />
              </div>
            </div>
          </div> :
            <Link to="/login">
              <button className='btn login-btn'>Login</button>
            </Link>
          }
        </div>
        <div className="navbar-cart">
          <div className="cart">
            <BsCart3 className='cart-icon' />
            <div className="cart-amount">{cartAmount}</div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="navbar-container ">
        <ul className="navbar-list">
          <li className='navbar-item'>
            <Link to="/" className='navbar-link'>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className='navbar-link'>
              Product
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to="/" className='navbar-link'>
              About us
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to="/" className='navbar-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar