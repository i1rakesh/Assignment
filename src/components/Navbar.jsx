import React, { useState } from 'react';
import '../styles/Navbar.css';
import Navdata from "../local-json/data.json"

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
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
        <img className="navbar-logo" src={Navdata.companyInfo[0].CompanyLogo} alt="" />
        
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
      <button className="close-btn" onClick={closeMenu}>
          Close
        </button>
        {Navdata.navLink.map((item, index) => (
          <a href={`${item.link}`} key={index}>{item.name}</a>
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