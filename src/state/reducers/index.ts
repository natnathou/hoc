import { Action, ActionTypes } from '../actions';
import { State } from '../intitialState';
import { logStatusReducer } from './logStatusReducer';

export const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOG_STATUS:
      return logStatusReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
