import { ActionTypes, logAction, MainAction } from './../../../state/actions';
import { intitialState } from './../../../state/intitialState';
import { logStatusReducer } from './../../../state/reducers/logStatusReducer';

describe('When everything is ok', () => {
  test('class logStatusReducer render the correct ouput', () => {
    let logStatus = logStatusReducer.reduce(intitialState, logAction(true));

    expect(logStatus).toEqual({ isLogin: true, comments: {} });

    logStatus = logStatusReducer.reduce(intitialState, logAction(false));

    expect(logStatus).toEqual({ isLogin: false, comments: {} });

    logStatus = logStatusReducer.reduce(intitialState, {
      type: ActionTypes.ANY_ACTIONTYPES_TEST,
      action: MainAction.ANY_MAINACTION_TEST,
      payload: 1,
    });

    expect(logStatus).toEqual({ isLogin: false, comments: {} });
  });
});
