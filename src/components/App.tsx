import React from 'react';
import { reducers } from '../state/reducers';
import { intitialState } from '../state/intitialState';
import { StateProvider } from '../state/StateContext';
const App = () => {
  return (
    <div>
      <StateProvider reducers={reducers} intitialState={intitialState}>
        App
      </StateProvider>
    </div>
  );
};

export default App;
