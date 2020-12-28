import React from 'react';
import { reducers } from '../state/reducers';
import { intitialState } from '../state/intitialState';
import { StateProvider } from '../state/StateContext';
import Header from './Header';
import CommentsList from './CommentsList';
import { Redirect, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='ui container'>
      <StateProvider reducers={reducers} intitialState={intitialState}>
        <Header />
        <Route path='/' exact={true}>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact={true}>
          <CommentsList />
        </Route>
        <Route path='/post' exact={true}></Route>
        <Route path='/signin' exact={true}></Route>
      </StateProvider>
    </div>
  );
};

export default App;
