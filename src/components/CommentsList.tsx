import React from 'react';
import _ from 'lodash';
import { useGlobalContext } from '../state/StateContext';
import '../style/CommentsList.css';

interface Props {
  neverFetch: boolean;
}
const CommentsList = ({ neverFetch }: Props) => {
  const { comments } = useGlobalContext();

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
      {neverFetch ? 'fetching...' : null}
      <div className='ui comments' data-testid='list'>
        {commentsRendering()}
      </div>
    </div>
  );
};

export default CommentsList;
