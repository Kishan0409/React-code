
// q1. Implement a button to show/hide the text content ?


import React, { useState } from 'react'

const Q1 = () => {
    const[show , setShow] = useState(true);

  return ( 
    <>
    <h1>Implement a button to show/hide the text content</h1>
    <div>
        <button style ={{height: "50px" , width: "90px" , padding :"10px"}} onClick={() => setShow((show) => !show)}>show/hide</button>
        {show ? <h1>welcome</h1> : null}
    </div>
    </>

  )
}

export default Q1;