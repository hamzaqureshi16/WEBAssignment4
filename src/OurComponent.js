import React from 'react'
import { useState } from 'react'
import './App.css'

export default function OurComponent() {
  const [count, setcount] = useState(0);
  return (
    <div className='App'>
     <div className='App-header'>
        <h1>{count}</h1>
        <button className='btn btn-primary' onClick={() => setcount(count+1)}>click me To increment state</button>
        <button className='btn btn-danger mt-1' onClick={()=>setcount(0)}>Reset State</button>
      </div>
    </div>
  )
}
