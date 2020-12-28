import { intitialState, State } from './../../state/intitialState';

describe('When everything is Ok', () => {
  test('should return intitialState', () => {
    const state: State = intitialState;
    expect(state).toEqual({ isLogin: false, comments: {} });
  });
});
