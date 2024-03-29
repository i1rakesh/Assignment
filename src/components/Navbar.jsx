import React, { useState } from 'react';
import '../styles/Navbar.css';
import Navdata from "../local-json/data.json"
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="navbar-toggle" onClick={toggleMenu}>
        <img className='hamburger' width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png" alt="menu--v1"/>
      </div>
      
        <img className="navbar-logo" src={Navdata.companyInfo[0].CompanyLogo} alt="" />
        
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
      <button className="close-btn" onClick={closeMenu}>
      <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/multiply.png" alt="multiply"/>
        </button>
        {Navdata.navLink.map((item, index) => (
          <Link to={item.link}>
          <a key={index}>{item.name}</a>
          </Link>
        ))}
      </div>
      <div className='navbar-serach'>
      <form action="">
            <input className='search-bar' placeholder='Secrch...' type="text" />
            <img className="search-icon" src='https://img.icons8.com/ios/50/search--v1.png' style={{ marginLeft: '-120px'}} />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;