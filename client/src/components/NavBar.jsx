import React, { useState } from 'react';
import MobileMenu from './MobileMenu.jsx';

export default function NavBar() {
  const [active, setShowMobileMenu] = useState(false);
  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  return (
    <>
    <MobileMenu handleClose={handleCloseMobileMenu} active={active} />

    <div className="fixed-menu">
      <div className="container">
        <div className="menu-container">
          <span className="fa fa-bars" onClick={handleShowMobileMenu} />
            <nav className="menu-nav">
              <ul className="nav-options">
                <li><a href="#bio">Hello</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Portfolio</a></li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
    </>
  );
}
