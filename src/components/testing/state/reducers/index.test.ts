import { ActionTypes, logAction, MainAction } from '../../../../state/actions';
import { intitialState } from '../../../../state/intitialState';
import { reducers } from '../../../../state/reducers';

describe('when everything is ok', () => {
  test('class reducers should return the correct state', () => {
    let reducer = reducers(intitialState, logAction(true));
    expect(reducer).toEqual({ isLogin: true });

    reducer = reducers(intitialState, {
      type: ActionTypes.ANY_ACTIONTYPES_TEST,
      action: MainAction.ANY_MAINACTION_TEST,
    });
    expect(reducer).toEqual({ isLogin: false });
  });
});
