import React from 'react';
import { reducers } from '../state/reducers';
import { intitialState } from '../state/intitialState';
import { StateProvider } from '../state/StateContext';
import Header from './Header';
import { Route } from 'react-router-dom';
import history from '../history/History';

const App = () => {
  return (
    <div className='ui container'>
      <StateProvider reducers={reducers} intitialState={intitialState}>
        <Header />
        <Route path='/' exact={true}>
          vide
        </Route>
        <Route path='/home' exact={true}>
          home
        </Route>
      </StateProvider>
    </div>
  );
};

export default App;
