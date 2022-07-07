import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    {/* <div style={{backgroundColor:"blue" ,width:"20px"}}> */}
<nav style={{backgroundColor:"rgb(135, 213, 195)" }} class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand" to="/home">DONO BLOGS</Link>
  <Link class="nav-link" to="/">Home</Link>
  <Link class="nav-link" to="/about">Features</Link>
  <Link class="nav-link " to="#">Disabled</Link>
  
  
</nav>

        </>
  )
}

export default Navbar