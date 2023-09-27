import React, { useRef } from 'react'

const REf = () => {
    let inpu =useRef(null)

    function handleInput(){
        // alert("heell")
        inpu.current.value="2000"
        inpu.current.focus()
        inpu.current.style.color="red"
    }
  return (
    <div>
      <h1>USeREF Commmponenets</h1>

      <input type="text" ref={inpu} name="" id="" />
      <button onClick={handleInput}>Click me</button>
    </div>
  )
}

export default REf
