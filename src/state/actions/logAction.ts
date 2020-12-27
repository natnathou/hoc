import { ActionTypes, MainAction } from '.';

export interface LogAction {
  type: ActionTypes;
  action: MainAction;
  payload: boolean;
}

export const logAction = (status: boolean): LogAction => {
  return {
    type: ActionTypes.LOG_STATUS,
    action: MainAction.CHANGE_LOG_STATUS,
    payload: status,
  };
};
