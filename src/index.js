import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Add imports for firebase

// Render App
ReactDOM.render(<App />, document.getElementById('root'));

// Keep this
serviceWorker.unregister();
