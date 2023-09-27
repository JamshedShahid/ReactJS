import React from 'react'

const Users = (props) => {
function apple(){
    alert("helo")
}

  return (
    <div>
      <h1 >{props.data.name}</h1>
      <h1>{props.data.email}</h1>
      <h1>{props.data.contact}</h1> <button onClick={apple}>HEllo</button>


    </div>
  )
}

export default Users
