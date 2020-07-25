import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customBootstrap.css';
import './styles.css';

// convert to hydrate upon implementing SSR
ReactDOM.render(<App />, document.getElementById('app'));
