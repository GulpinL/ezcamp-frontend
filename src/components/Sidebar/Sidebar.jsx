import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { FaBars, FaUserAlt } from "react-icons/fa";
import { BsCart3, BsSearch, BsHouseDoorFill, BsFillInfoCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GiLeatherBoot } from "react-icons/gi";


import { setIsSidebarOpen } from '../../features/Navbar/navbarSlice';

import "./Sidebar.sass"

const Sidebar = () => {

  const dispatch = useDispatch()
  const {isSidebarOpen} = useSelector(store => store.navbar)

  const [cartAmount, setCartAmount] = useState(4)
  const [accountName, setAccountName] = useState("Trần Hà Long")
  const handleSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen))
  }
  return (
    <aside id='sidebar'>
        <div className="sidebar-container">
          <Link to ="/" className="sidebar-brand">
            <img src="/img/brand_logo.png" alt="" className="logo-brand" />
          </Link>
          <div className="sidebar-left">
            <div className="navbar-cart">
                <div className="cart">
                  <BsCart3 className='cart-icon'/>
                  <div className="cart-amount">{cartAmount}</div>
                </div>
            </div>
            <button className="sidebar-btn" onClick={handleSidebar}>
              <FaBars className={isSidebarOpen ? 'sidebar-icon rotate-90' : 'sidebar-icon'}/>
            </button>
          </div>
        </div>
        <div className="line"></div>
        {isSidebarOpen ? <div className="sidebar-dropdown">
          <div className="sidebar-search">
            <input type="text" className="search-box sidebar-box" placeholder='Tent, hand, stove, ...'/>
            <button className='btn search-btn'>
              <BsSearch className='search-icon'/>
              Search
          </button>
          </div>
          <Link to = "/" className="sidebar-link">
            <div className="sidebar-icon">
              <FaUserAlt/>
            </div>
            <p>{accountName}</p>
          </Link>
          <Link to = "/" className='sidebar-link'>
            <div className="sidebar-icon">
              <BsHouseDoorFill/>
            </div>
            <p>Home</p>
          </Link>
          <Link to = "/" className='sidebar-link'>
            <div className="sidebar-icon">
              <GiLeatherBoot/>
            </div>
            <p>Product</p>
          </Link>
          <Link to = "/" className='sidebar-link'>
            <div className="sidebar-icon">
              <BsFillInfoCircleFill/>
            </div>
            <p>About us</p>
          </Link>
          <Link to = "/" className='sidebar-link'>
            <div className="sidebar-icon">
              <BsFillTelephoneFill/>
            </div>
            <p>Contact</p>
          </Link>
          <div className="btns-container">
            {accountName !== "" ? <button className='btn sidebar-login-btn'>
              <div className="sidebar-icon">
                <FiLogIn/>
              </div>
              <p>Login</p>
            </button> : <button className='btn sidebar-login-btn'>
              <div className="sidebar-icon">
                <FiLogOut className='rotate-180'/>
              </div>
              <p>Logout</p>
            </button>}
            
            
          </div>
        </div> :null}
        
    </aside>
  )
}

export default Sidebar