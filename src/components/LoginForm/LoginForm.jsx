import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin, setLoginForm } from "../../features/Authentication/authenticationSlice"
import { setUser } from '../../features/User/userSlice'
import { useNavigate } from 'react-router-dom'

import { BsArrowRight } from "react-icons/bs";

import "./LoginForm.sass"

const LoginForm = () => {
  let navigate = useNavigate()

  const { login, emailRegex, phoneRegex } = useSelector(store => store.authentication)
  const { user } = useSelector(store => store.user)

  const [loginInput, setLoginInput] = useState(false)

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginInput) {
      if ((login.firstInput !== "" && String(login.firstInput).match(new RegExp(emailRegex)))
        ||
        (login.firstInput !== "" && String(login.firstInput).match(new RegExp(phoneRegex)))
        ||
        login.firstInput !== ""
      ) {
        setLoginInput(true)
      }
      else {
        setLoginInput(false)
      }
    }
    else {
      if (login.secondInput !== "") {
        dispatch(setUser({ ...user, account: login.firstInput }))
        navigate("/")
      }
    }
  }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className="form-title">
        Login
      </div>
      {!loginInput ? <div className="form-content">
        <div className="form-input-container">
          <input type="text" className="form-input" placeholder='Enter your user name, phone number or email' value={login.firstInput} onChange={(e) => dispatch(setLogin({ ...login, "firstInput": e.target.value }))} />
        </div>
        <div className="form-btn-container">
          <button type="submit" className='form-btn'>Continue
            <BsArrowRight />
          </button>
        </div>
        <p>Haven't got an account yet?</p>
        <p className='direct-link' onClick={() => dispatch(setLoginForm(false))}>Get one now!</p>
      </div> :
        <div className="form-content">
          <div className="form-input-container">
            <input type="text" className="form-input" placeholder='Enter your password' value={login.secondInput} onChange={(e) => dispatch(setLogin({ ...login, "secondInput": e.target.value }))} />
          </div>
          <div className="form-btn-container">
            <button type="submit" className='form-btn'>Login</button>
          </div>
        </div>
      }
    </form>
  )
}

export default LoginForm