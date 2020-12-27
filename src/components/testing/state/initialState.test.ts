import { intitialState, State } from '../../../state/intitialState';

describe('When everything is Ok', () => {
  test('should return an object with iunterface State', () => {
    const state: State = intitialState;
    expect(state).toEqual({ isLogin: false });
  });
});
