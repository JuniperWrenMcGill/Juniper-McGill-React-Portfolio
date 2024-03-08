import React from 'react';
import './navbar.css'; // import styling

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="logo">Clove Art House</li> {/* Added class for styling */}
          {/* <div className="logo">
             <img src="./img/logo.png" alt="Logo" />
          </div> */}
          <li><a href="/projects">Projects</a></li>
          <li><a href="https://docs.google.com/document/d/12MvinOEdxXkshm_X4Uz7r1WDWrBj4B_wfN_jyZ8m5rw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul> 
      </nav>
    </header>
  );
};

export default Navbar;
