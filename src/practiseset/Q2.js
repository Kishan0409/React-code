 // Q2 Implement a Stopwatch/timmer as shown below with start ,stop and reset button.?


    import React, { useState } from 'react' ; 
    import "../practiseset/CSS/Q2.css"

    const Q2 = () => {
        const[timer,setTimer] = useState(0) 

       const starttimer = () => {
          window.myTimer =  setInterval(() => {
            setTimer(timer => (timer +1 ))
           },1000)
       }

       const stoptimer = () => {
        clearInterval(window.myTimer);
       }

       const resettimer = () => {
        clearInterval(window.myTimer);
        setTimer(0);
       }

        return (
            <>
            <div className='container'> 
            <h1>Timer</h1>
            <span>{Math.trunc(timer / 60)} minutes </span>
            <span>{timer % 60 }  seconds</span>
            <div>
                <button onClick={starttimer}>Start</button>
                <button onClick={stoptimer}>Stop</button>
                <button onClick={resettimer}>reset</button>
            </div>
            </div>
            
            </>
        )
        }
        export default Q2;