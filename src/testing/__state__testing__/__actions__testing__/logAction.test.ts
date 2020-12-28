import {
  ActionTypes,
  logAction,
  LogAction,
  MainAction,
} from './../../../state/actions';

describe('When everything is ok', () => {
  test('shoulde return an object with type LogAction with the correct payload', () => {
    const action: LogAction = logAction(true);

    expect(action).toEqual({
      type: ActionTypes.LOG_STATUS,
      action: MainAction.CHANGE_LOG_STATUS,
      payload: true,
    });
  });
});
