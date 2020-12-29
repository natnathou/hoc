import React from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import { addManyComments, CommentType } from '../state/actions';
import { useDispatch } from '../state/StateContext';
import Header from './Header';
import CommentsList from './CommentsList';
import Form from './Form';
import { protectRouteHoc } from './protectRouteHoc';

const ProtectedRouteForm = protectRouteHoc(Form);

const App = () => {
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
      <ProtectedRouteForm path='/post' exact={true} isConnected={true} />
      <Route path='/signin' exact={true}></Route>
    </div>
  );
};

export default App;
