import React from "react";
import {Link,NavLink} from "react-router-dom";

const Header=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">AA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <Link to="/">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"><NavLink to="/" class>Home</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><NavLink to="/skills" >Skills</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><NavLink to="/projects" >Projects</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><NavLink to="/contact" >Contact</NavLink></a>
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