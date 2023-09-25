import React, { useState } from 'react'

const Profile = () => {
    const [logein,setLogin]=useState(3)
  return (
    <div>
        {
            logein==1 ?
            <h2>Profile page</h2> : logein==2?
            <h2>jamshed</h2> : 
            <h2>jamshed guest</h2>

        }
      
    </div>
  )
}

export default Profile
