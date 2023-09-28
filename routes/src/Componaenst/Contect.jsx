import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contect = () => {
    return (
        <div>
            <h1>COntect Page</h1>

            <Link to="Chaneel">
                chanell
            </Link>
            <Link to="other">
                Other
            </Link> 
            
            <Link to="channel">
                Cjannel
            </Link>
            <Outlet />
        </div>
    )
}

export default Contect
