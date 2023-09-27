import React, { useRef } from 'react'
import Child from './child'

const Forwordref = () => {

    let useref = useRef(null)

    function updateInput(){
        useref.current.value="1000"
    }
  return (
    <div>
      <h1>Forward Ref</h1>
      <Child ref={useref} />
      <button onClick={updateInput}>Click me</button>
      
    </div>
  )
}

export default Forwordref
