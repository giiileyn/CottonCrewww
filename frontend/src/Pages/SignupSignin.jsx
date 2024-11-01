import React from 'react'
import './Css/SignupSignin.css'

const SignupSignin = () => {
  return (
    <div className="signinsignup">
      <div className="signinsignup-container">
        <h1>Sign Up</h1>
        <div className="signinsignup-field">
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='name@gmail.com' />
          <input type="password" placeholder='**********' />
        </div>
        <button>Continue</button>
        <p className="signinsignup-signin">Already have an account? <span>Sign In here</span></p>
        <div className="signinsignup-agree">
          <input type="checkbox" name ='' id='' />
          <p>By continue, i adhrfknv plicy</p>
        </div>
      </div>
    </div>
  )
}

export default SignupSignin
