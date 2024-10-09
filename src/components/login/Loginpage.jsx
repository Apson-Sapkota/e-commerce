import React from 'react'
import { Link } from 'react-router-dom'


function Loginpage() {
  return (
    <>
    <h3 className='text-center'>Welcome to the login page</h3>
    <div className="container">
    <form className='loginbox'>
    <p> <label htmlFor="a">Email</label></p>
    <input type="email" id='a' />
    <p> <label htmlFor="b">Password</label></p>
    <input type="email" id='b' />
  <button className='d-block buttonb my-3' >Login</button>
 <p>Forgot Passowrd ? </p>
 <p>Don't have an account <span> <Link to='/SignUp'>Sign UP</Link></span></p>

</form>

    </div>
  

    </>
  )
}

export default Loginpage