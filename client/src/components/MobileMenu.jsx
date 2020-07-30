import React from 'react';

export default function MobileMenu({ handleClose, active }) {
  return (
    <div className={`mobile-menu ${active ? 'active' : ''}`}>
      <div className="container">
        <div className="close-mobile-menu" onClick={handleClose}>x</div>
        <nav className="mobile-nav">
          <ul>
            <li><a href="#bio" onClick={handleClose}>Hello</a></li>
            <li><a href="#resume" onClick={handleClose}>Resume</a></li>
            <li><a href="#projects" onClick={handleClose}>Portfolio</a></li>
          </ul>
        </nav>

      </div>
    </div>

  );
}
