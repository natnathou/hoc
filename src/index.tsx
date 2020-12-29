import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider';
import Router from './components/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
