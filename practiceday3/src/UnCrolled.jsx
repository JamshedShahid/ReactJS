import React, { useRef } from 'react'

const UnCrolled = () => {

    let inputref =useRef(null)
    let inputrefw =useRef(null)


    function HandleChange(e){
     e.preventDefault()
     console.log("inputField ! value",inputref.current.value )
     console.log("inputField 2 value",inputrefw.current.value )


    }
  return (
    <div>
     <h1>UnCrolled</h1>
     <form onSubmit={HandleChange}>
     <input type="text" ref={inputref} name="" id="" /> <br /> <br />
     <input type="text" ref={inputrefw} name="" id="" />  <br /> 
     <button>click me</button>
     </form>
     
    </div>
  )
}

export default UnCrolled
