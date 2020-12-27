import { Action, ActionTypes, LogAction, MainAction } from '../actions';
import { State } from '../intitialState';

export class logStatusReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case MainAction.CHANGE_LOG_STATUS:
        return this.logStatus(state, action as LogAction);
      default:
        return { ...state };
    }
  }
  private static logStatus(state: State, action: LogAction) {
    const payload = action.payload;

    return { ...state, isLogin: payload };
  }
}
