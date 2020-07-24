import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customBootstrap.css';

// convert to hydrate upon implementing SSR
ReactDOM.render(<App />, document.getElementById('app'));


