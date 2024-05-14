import React from "react";
import {Link,NavLink} from "react-router-dom";
import { Location, useLocation } from "react-router";
import { MdOutlineMenu } from "react-icons/md";
const Header=()=>{
  const location=useLocation();
  const isActive=(pathName)=>{
    return location.pathname===pathName;
  }
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" style={{color:"white"}} >AA</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <MdOutlineMenu />
    </button>
    <div class="collapse navbar-collapse" style={{textAlign:"center",color:"white"}} id="navbarNav">
        <Link to="/">
      <ul class="navbar-nav"  >
        <li class="nav-item" >
           <Link to="/" class="nav-link" style={{fontWeight:isActive("/") ?"bold":"normal",color:"white"}} >Home</Link>  
        </li>
        <li class="nav-item">
          < Link to="/skills" class="nav-link" style={{fontWeight:isActive("/skills") ?"bold":"normal",color:"white"}} >Skills</Link>  
        </li>
        <li class="nav-item">
          < Link to="/projects" class="nav-link" style={{fontWeight:isActive("/projects") ?"bold":"normal",color:"white"}}  >Projects</Link>  
        </li>
        <li class="nav-item">
          < Link to="/contact" class="nav-link" style={{fontWeight:isActive("/contact") ?"bold":"normal",color:"white"}}  >Contact</Link>  
        </li>
      </ul>
      </Link>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header;