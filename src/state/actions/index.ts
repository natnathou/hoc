import { LogAction } from './logAction';

export * from './logAction';

export enum ActionTypes {
  LOG_STATUS = 'LOG_STATUS',
}

export enum MainAction {
  CHANGE_LOG_STATUS = 'CHANGE_LOG_STATUS',
}

type Action = {
  type: ActionTypes;
  action: MainAction;
  payload: any;
};

export type Actions = Action | LogAction;
