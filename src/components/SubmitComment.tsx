import React from 'react';
import '../styles/navigation.css'


function Navigation() {
  return (
    <div >
      <ul className="nav-list">
        <li className="nav-list-item"><a href="#home">Home</a></li>
        <li className="nav-list-item"><a href="#news">News</a></li>
        <li className="nav-list-item"><a href="#contact">Contact</a></li>
        <li className="float-left nav-list-item active-nav-item"><a href="#about">About</a></li>
      </ul>
    </div>
  );
}

export default Navigation;