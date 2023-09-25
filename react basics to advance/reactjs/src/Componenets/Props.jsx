import React from 'react'

const Props = (pro) => {
    console.log(pro)
  return (
    <div style={{backgroundColor:"red",margin:"10px"}}>
      {/* <h1>Props Components</h1> */}
      <h1>{pro.name}</h1>
      <h1>{pro.email}</h1>


    </div>
  )
}

export default Props
