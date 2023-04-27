import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


export default function Navbar() {
  return <div >
    <header>
      <h2 className="heading">Users</h2>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  </div>;
}
