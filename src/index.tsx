import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Router from './components/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
