import React from 'react';
import NavBar from './NavBar.jsx';
import MainHeader from '../sections/MainHeader.jsx';
import Bio from '../sections/Bio.jsx';
import Resume from '../sections/Resume.jsx';
import Projects from '../sections/Projects.jsx';

const App = () => (
    <div className="app-container">
      <NavBar />
      <MainHeader />
      <Bio />
      <hr></hr>
      <Resume />
      <hr></hr>
      <Projects />
    </div>
);

export default App;
