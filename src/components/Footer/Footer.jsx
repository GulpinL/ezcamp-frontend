import React from 'react'
import {Link} from "react-router-dom"

import { FaFacebookMessenger, FaGithub, FaReddit, FaLinkedin, FaYoutube } from "react-icons/fa";

import "./Footer.sass"

const Footer = () => {
  return (
    <footer className = "footer">
      <div className="footer-title">
        Your satisfaction is our happiness
      </div>
      <div className="footer-info">
        <div className="footer-left">
          <ul className="staff-list">
            <li className="staff">
              <p className="staff-id">18127264</p>
              <p className="staff-name">Trần Hà Long</p>
            </li>
            <li className="staff">
              <p className="staff-id">18127204</p>
              <p className="staff-name">Thái Nhật Tân</p>
            </li>
            <li className="staff">
              <p className="staff-id">18127074</p>
              <p className="staff-name">Trần Hải Đăng</p>
            </li>
            <li className="staff">
              <p className="staff-id">18127187</p>
              <p className="staff-name">Dương Ngọc Nguyên Phương</p>
            </li>
            <li className="staff">
              <p className="staff-id">19127015</p>
              <p className="staff-name">Huỳnh Tuấn Đạt</p>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="contact-list">
            <li className="contact">
              <Link to = "/" className="contact-link">
                <FaFacebookMessenger className='contact-icon'/>
              </Link>
            </li>
            <li className="contact">
              <Link to = "/" className="contact-link">
                <FaGithub className='contact-icon'/>
              </Link>
            </li>
            <li className="contact">
              <Link to = "/" className="contact-link">
                <FaLinkedin className='contact-icon'/>
              </Link>
            </li>
            <li className="contact">
              <Link to = "/" className="contact-link">
                <FaReddit className='contact-icon'/>
              </Link>
            </li>
            <li className="contact">
              <Link to = "/" className="contact-link">
                <FaYoutube className='contact-icon'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; EC01-10-2022; supported by Mr.Luong Vi Minh
      </div>
    </footer>
  )
}

export default Footer