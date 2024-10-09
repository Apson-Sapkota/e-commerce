import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  const Signupvalue = {
    name:"",
    Userid:"",
    email:"",
    password:"",
    phoneno:"",
    country:"",
    zipcode:""
  }

  const [signup,setSignup] = useState(Signupvalue)


  const handleChange=(e)=>{
    const{name,value} = e.target
    setSignup({...signup,[name]:value})
    
   
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("form submitted",signup)
  }
  return (
   <>
   <div className="container signupbox my-4">
   <h3 className='text-center'>Welcome to Sign Up Page</h3>
   <form onSubmit={handleSubmit}>
   <p><label htmlFor="b">Name</label></p>
   <input type="text" id='b' name='name' onChange={handleChange} value={signup.name}/>
    <p> <label htmlFor="a">User Id</label></p>
    <input type="text" id='a' name='Userid' onChange={handleChange} value={signup.Userid}/>
    <p> <label htmlFor="g">Email</label></p>
    <input type="email" id='g' name='email' onChange={handleChange} value={signup.email}/>
    <p> <label htmlFor="c" >Password</label></p>
    <input type="text" id='c' name='password' onChange={handleChange} value={signup.password}/>
    <p> <label htmlFor="p" >Phone Number</label></p>
    <input type="text" id='p' name='phoneno' onChange={handleChange} value={signup.phoneno}/>

    <p> <label htmlFor="e">Country</label></p>
    <select name="country" id="e" onChange={handleChange}>
      <option value="option">Select an Option</option>
      <option value="Nepal">Nepal</option>
      <option value="India">India</option>
      <option value="Pakistan">Pakistan</option>
    </select>

    <p> <label htmlFor="f" onChange={handleChange} >Zip Code</label></p>
    <input type="text" id='f' value={signup.zipcode} name='zipcode' onChange={handleChange}/>

   

    {/* <Link to="/"> */}
    <button type='submit' className='d-block my-3 text-center buttona'> Create Account</button>
    {/* </Link> */}
   </form>
   </div>
   
   </>
  )
}

export default Signup