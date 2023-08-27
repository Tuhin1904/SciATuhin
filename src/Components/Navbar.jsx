import "./Navbarstyles.css";
import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    
  return (
    <>
    <div className="header">
        <div className="circle">
        <Link><img src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="Logo" /></Link>
        </div>
        <div class="unordered">
        <ul className="navbar-menu">
            <li>
                Home
            </li>
            <li>
                Courses
            </li>        
            <li>
                Selection
            </li>
            <li>
                Blogs
            </li>
            <li>
                Materials
            </li>
            <li>
                <Link to="/team">Team</Link>
            </li>
            <li>
                Contact Us
            </li>
            <li>
            <button>LOGIN</button>
            </li>
        </ul>
        </div>
    </div>
   
    </>
  )
}

export default Navbar