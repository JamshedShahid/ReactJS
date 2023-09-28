import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <NavLink to="/about">About </NavLink> <br />
      <NavLink to="/">Home</NavLink> <br />
      <NavLink to="/filter">Filter</NavLink> <br />
      <NavLink to="/contect">Contect</NavLink> <br />
      <NavLink to="/login">Login</NavLink> <br />


      
      

      {/* <NavLink to="/users/peter">User Anil</NavLink> <br />
      <NavLink to="/users/anil">User Peter</NavLink> <br /> */}


    </div>
  )
}

export default Navbar
