import React, { useState } from 'react'
import Audo from '../Nuremir/1.mp3'

function Nuremir() {
    const [count, setCount] = useState(0)
    const [audio] = useState(new Audio(Audo));
    const reset =()=>{
        audio.play()
        setCount(0)
        
    }
  return (
    <div>
        <p>{count}</p>
     <button onClick={()=> setCount(count+1)}>CLick me!</button>
     <button onClick={()=>reset()}>ReSet</button>
    </div>
  )
}

export default Nuremir