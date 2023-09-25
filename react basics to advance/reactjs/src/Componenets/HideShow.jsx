import React, { useState } from 'react'


const HideShow = () => {

    const [hide, setHide]=useState(true)
    function toogle(){
        setHide(!hide)
    }
  return (
    <div>
        {
            hide?
            <h1>Hello Jimmi </h1>:
            null
        }
      
      {/* <button onClick={()=>setHide(false)}>Hide</button> */}
      {/* <button onClick={()=>setHide(true)}>Show</button> */}

      {/* <button onClick={toogle}>Toogle</button> */}
      <button onClick={()=>setHide(!hide)}>Toogle</button>

    </div>
  )
}

export default HideShow
