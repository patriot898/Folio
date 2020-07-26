import React from 'react';
import MainHeader from '../sections/MainHeader.jsx';
import Bio from '../sections/Bio.jsx';
import Resume from '../sections/Resume.jsx';
import Projects from '../sections/Projects.jsx';

const App = () => (
    <div>
      <MainHeader />
      <Bio />
      <hr></hr>
      <Resume />
      <Projects />
    </div>
);

export default App;
