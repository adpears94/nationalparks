import styled from 'styled-components';
import React from 'react';


export const NavBar = () => {
return(  
  <nav>
    <div className="navbar">
      <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>  
        <div className="logo">
          <h1><a className="navbar-logo"  href="/">National Parks</a></h1>
        </div>
        <div className="menu-items">
          <li><a href="/">Home</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/about">About Us</a></li>
        </div>
      </div>
    </div>
  </nav>






  // <nav className="nav">
  //   <a href="/" className="site-title"> National Parks</a>
  //   <ul>
  //     <li>
  //       <a href="/">Home</a>
  //     </li>
  //     <li>
  //       <a href="/resources">Resources</a>
  //     </li>
  //     <li>
  //       <a href="/about">About</a>
  //     </li>
  //   </ul>
  // </nav>

   
    
)
}