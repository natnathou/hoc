import { LogAction } from './logAction';

export * from './logAction';

export enum ActionTypes {
  LOG_STATUS = 'LOG_STATUS',
  ANY_ACTIONTYPES_TEST = 'ANY_ACTIONTYPES_TEST',
}

export enum MainAction {
  CHANGE_LOG_STATUS = 'CHANGE_LOG_STATUS',
  ANY_MAINACTION_TEST = 'ANY_MAINACTION_TEST',
}

type Actions = {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
};

export type Action = Actions | LogAction;
