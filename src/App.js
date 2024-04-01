import React, { useEffect, useState } from 'react'
import "./App.css"


const App = () => {
   const data = {name:"" , email:"", password:""};

   const[inputData , setInputData] = useState(data)
   const[flag ,setFlag] = useState(false)

   useEffect(() => {
    console.log("Registered")
   },[flag])
   
   const handleData = (e) => {
       setInputData({...inputData , [e.target.name]:e.target.value});
       console.log(inputData);
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password) {
      alert("all fields are manadatory")
    }
    else(
      setFlag(true)
    )

   }

  return ( 
    <> 
    <div>{(flag)?<h2 className='showData'>Hello {inputData.name}, you have register successfully</h2> :""}</div>
    <div>
       <div className="wrapper">
    <form action="#" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div className="input-field">
        <input type="text" name="name"  value={inputData.name} onChange={handleData}/>
        <label>Enter your Name</label>
      </div>
        <div className="input-field">
        <input type="text" name='email'  value={inputData.email} onChange={handleData}/>
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input type="password" name='password'  value={inputData.password} onChange={handleData}/>
        <label>Enter your password</label>
      </div>
       <br></br>
      <button type="submit">Register</button>
    </form>
  </div>
    </div>
    </>
  )
}

export default App