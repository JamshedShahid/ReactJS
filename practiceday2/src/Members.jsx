import React from 'react'

const Members = (props) => {
  return (
    <div>
       <h1>MEmbers Componenets</h1>
       <button onClick={()=>props.data()}>Call Data Punction</button>
     
    </div>
  )
}

export default Members
