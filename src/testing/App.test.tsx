import { render } from '@testing-library/react';
import React from 'react';
import App from '../components/App';
import Router from '../components/Router';

describe('When everything is ok', () => {
  test('App is render', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
