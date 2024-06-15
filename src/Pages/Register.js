import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='d-block mx-auto'>
      <div className="login-page">
        <div className="form-login">
          <form className="register-form">
            <input type="text" placeholder="Enter userame"/>
            <input type="password" placeholder="Enter password"/>
            <input type="text" placeholder="Email Address"/>
            <button>create</button>
            <p className="form-message"><Link to='/login'>Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register