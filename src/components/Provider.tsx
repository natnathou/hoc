import React from 'react';
import App from './App';
import { reducers } from '../state/reducers';
import { intitialState } from '../state/intitialState';
import { StateProvider } from '../state/StateContext';

const Provider = () => {
  return (
    <React.Fragment>
      <StateProvider reducers={reducers} intitialState={intitialState}>
        <App />
      </StateProvider>
    </React.Fragment>
  );
};

export default Provider;
