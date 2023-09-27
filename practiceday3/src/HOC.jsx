import React, { useState } from 'react'

const HO = () => {
  return (
    <div>
      <h1>Commponenets</h1>
    <HOC cmp={Count} />

    </div>
  )
}

function HOC(p){
    return(
        <h2><p.cmp/></h2>
        )
    
}

function Count(){

    const [count,setCount] =useState(0)
return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
)
}

export default HO
