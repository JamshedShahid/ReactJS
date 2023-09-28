import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const paramss = useParams();
    const {names}= paramss
    // console.log(names)
    return (
        <div>

            <h1>Hello {names}</h1>
        </div>
    )
}

export default User
