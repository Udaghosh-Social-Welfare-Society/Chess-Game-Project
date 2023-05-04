import React from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <Link to="#" className="menuButton">
          <FiMenu />
        </Link>
        <img src="/chessLogo.png" alt="logo" className="logo" />
      </div>
      <div className="navbarButtons">
        <button className="c">Sign Up</button>
        <button className="logInButton">Log In</button>
      </div>
    </div>
  );
}

export default Navbar