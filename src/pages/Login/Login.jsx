import React from 'react'
import { useSelector } from 'react-redux'
import { CreateForm, LoginForm } from '../../components'
import { useViewport } from '../../customhooks'

import "./Login.sass"

const Login = () => {
  const { loginForm } = useSelector(store => store.authentication)
  const viewport = useViewport()
  const mobileView = viewport.width <= 1024
  return (
    <div id='login-page' className={!mobileView && 'pt-100'}>
      {loginForm ? <LoginForm /> : <CreateForm />}
    </div>
  )
}

export default Login