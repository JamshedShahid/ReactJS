import React, { useEffect, useState } from 'react'

const UseEffectpart2 = () => {
    const [data,setData]=useState(10)
    const [count,setCount]=useState(100)


    useEffect(()=>{
        console.log("Called With Data Statae");
    },[data])

    useEffect(()=>{
        alert("jimmi"+count);
    },[count])
  return (
    <div>
        <h1>Plus {count}</h1>
        <button onClick={()=>setData(data-1)}>Minus</button>
     
      <button onClick={()=>setCount(count+1)}>Plus</button>
    </div>
  )
}

export default UseEffectpart2
