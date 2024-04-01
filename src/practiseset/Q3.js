// Grab the values from the input fields and print below as per the sample output.?
import React, { useState } from 'react'
import "../practiseset/CSS/Q3.css";

const Q3 = () => { 
const initialState = {
    username : "",
    fullname : "",
    age: ""

}

   const [form ,setForm] = useState(initialState)
   const[display , setDisplay] = useState(false)


   const updateField = (e) => {
      
    setForm({...form,[e.target.name]:e.target.value})
   }

   const handlingData = (e) => {
    e.preventDefault();
    setDisplay(true);
    
   }
   

  return (
   <>
   <h1>Handling Form data </h1>
   <form onSubmit={handlingData}>
    <div>
    <label htmlFor='username'>Username : </label>  
    <input type='text' name='username' onChange={updateField} />
    </div>
    <div>
    <label htmlFor='fullname'>Fullname : </label>
    <input type='text' name = "fullname" onChange={updateField} />
    </div>
     <div>
    <label htmlFor='age'>age :  </label>
    <input type='text'  name='age'onChange={updateField} />
    </div>
    <div>
    <button className='btn'>submit</button>
    </div>
       {display && (
        <>
         <h4>Request Sent to DB with below request data</h4>
         <ul>
           <li>{form.username}</li>
           <li>{form.fullname}</li>
           <li>{form.age}</li>
         </ul>
       </>           
       )} 
       </form>  
   </>
  )
  
}

export default Q3

