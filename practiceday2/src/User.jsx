import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>User Componenets</h1>
      <button onClick={()=>props.data()}>Call Data Punction</button>
    </div>
  )
}

export default User
