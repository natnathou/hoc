import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useDispatch, useGlobalContext } from '../state/StateContext';
import { addManyComments, CommentType } from '../state/actions';
import '../style/CommentsList.css';

const CommentsList = () => {
  const dispatch = useDispatch();
  const { comments } = useGlobalContext();
  React.useEffect(() => {
    axios
      .get<CommentType[]>('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        let data = response.data;
        dispatch(addManyComments(data));
      });
  }, [dispatch]);

  const commentsRendering = () => {
    const commentsArray = _.toArray(comments);
    return commentsArray.map((data, index) => {
      return (
        <div className='comment' key={index}>
          <div className='content'>
            <span className='author'>{data.name}</span>
            <div className='metadata'>
              <div className='email'>{data.email}</div>
            </div>
            <div className='text'>{data.body}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className='CommentsList'>
      <div className='ui comments'>{commentsRendering()}</div>
    </div>
  );
};

export default CommentsList;
