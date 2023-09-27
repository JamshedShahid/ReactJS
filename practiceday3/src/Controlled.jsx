import React, { useState } from 'react'

const Controlled = () => {

    let [val,setval] =useState("")
  return (
    <div>
      <h1>Helllo world</h1>


      <input type="text"  defaultValue="00000" onChange={(e)=>setval(e.target.value)} name="" id="" />
    </div>
  )
}

export default Controlled
