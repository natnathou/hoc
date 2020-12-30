import React from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import { addManyComments, CommentType } from '../state/actions';
import { useDispatch, useGlobalContext } from '../state/StateContext';
import { protectRouteHoc } from './protectRouteHoc';
import Header from './Header';
import CommentsList from './CommentsList';
import Form from './Form';
import Signin from './Signin';

const ProtectedRouteForm = protectRouteHoc(Form);

const App = () => {
  const { isLogin } = useGlobalContext();
  const dispatch = useDispatch();
  const [neverFetch, setNeverFetch] = React.useState(true);

  React.useEffect(() => {
    axios
      .get<CommentType[]>('https://jsonplaceholder.typicode.com/comments')
      .then(async (response) => {
        let data = response.data;
        dispatch(addManyComments(data));
        setNeverFetch(false);
      });
  }, [dispatch]);

  return (
    <div className='ui container'>
      <Header />
      <Route path='/' exact={true}>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' exact={true}>
        <CommentsList neverFetch={neverFetch} />
      </Route>
      <ProtectedRouteForm path='/post' exact={true} isConnected={isLogin} />
      <Route path='/signin' exact={true}>
        <Signin />
      </Route>
    </div>
  );
};

export default App;
