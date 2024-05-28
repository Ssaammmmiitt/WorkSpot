import React, { useState } from "react";


const Try =()=> {
    const [counter,setCounter] =useState(0)
    const decrement=()=>{
    setCounter(counter-1);
    }
    const increment=()=>{
    setCounter(counter+1);
    }
    return (
        <div>
            <button onClick={decrement}>Decrease</button>
            {counter}
            <button onClick={increment}>Increase</button>            
        </div>
    )
}

export default Try;