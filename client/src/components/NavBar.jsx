import React from 'react';

export default function NavBar() {
  return (

    <div className="fixed-menu">
      <div className="container">
        <div className="menu-container">
          <span className="fa fa-bars" />
          <div className="menu">
            <nav>
              <ul className="nav-options">
                <li>
                  <a href="#bio">Hello</a>
                </li>
                <li>
                  <a href="#resume">Resume</a>
                </li>
                <li>
                  <a href="#projects">Portfolio</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
