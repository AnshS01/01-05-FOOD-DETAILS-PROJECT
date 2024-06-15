import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='d-block mx-auto'>
      <div className="login-page">
        <div className="form-login">
          <form className="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>login</button>
            <p className="form-message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login