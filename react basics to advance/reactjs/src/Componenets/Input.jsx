import React, { useState } from 'react'

const Input = () => {

    const [input , setinput] = useState(null)
    const [print , setPrint ] = useState(false)

    function GetData(val){
        console.log(val.target.value)
        setinput(val.target.value)
        setPrint(false)
    }
  return (
    <div>
        {
            print? 
            <h1>{input} </h1>
            :null
        }
      {/* <h1>Get Input Value {input}</h1> */}
      <input type="text" onChange={GetData} name="" id="" />

      <button onClick={()=>setPrint(true)}>jamshed</button>
    </div>
  )
}

export default Input
