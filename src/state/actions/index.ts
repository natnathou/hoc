import { LogAction, AddManyCommentAction } from '../actions';

export * from './logAction';
export * from './addManyComments';

export enum ActionTypes {
  LOG_STATUS = 'LOG_STATUS',
  COMMENTS = 'COMMENTS',
  ANY_ACTIONTYPES_TEST = 'ANY_ACTIONTYPES_TEST',
}

export enum MainAction {
  CHANGE_LOG_STATUS = 'CHANGE_LOG_STATUS',
  ADD_MANY_COMMENT = 'ADD_MANY_COMMENT',
  ANY_MAINACTION_TEST = 'ANY_MAINACTION_TEST',
}

type Actions = {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
};

export type Action = Actions | LogAction | AddManyCommentAction;
