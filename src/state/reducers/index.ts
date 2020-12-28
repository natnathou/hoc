import { Action, ActionTypes } from '../actions';
import { State } from '../intitialState';
import { logStatusReducer } from './logStatusReducer';
import { commentsReducer } from './commentsReducer';

export const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOG_STATUS:
      return logStatusReducer.reduce(state, action);
    case ActionTypes.COMMENTS:
      return commentsReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
