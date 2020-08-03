import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// eslint-disable-next-line import/extensions
import './listeners.js';

// convert to hydrate upon implementing SSR
// eslint-disable-next-line no-undef
ReactDOM.hydrate(<App />, document.getElementById('app'));
