import styled from 'styled-components';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const NavBar = () => {
return(  
  <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="logo">
          <h1 ><a href="/">National Parks</a></h1>
        </div>
        <div class="menu-items">
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