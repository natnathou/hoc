import {
  ActionTypes,
  addManyComments,
  logAction,
  MainAction,
  Comment,
} from './../../../state/actions';
import { intitialState } from './../../../state/intitialState';
import { reducers } from './../../../state/reducers';

describe('when everything is ok', () => {
  test('class reducers should return the correct state', () => {
    let reducer = reducers(intitialState, logAction(true));
    expect(reducer).toEqual({ isLogin: true, comments: {} });

    const comments: Comment[] = [
      {
        postId: 2121,
        id: 12121,
        name: 'david',
        email: 'david@test.com',
        body: 'Some body',
      },
      {
        postId: 23232,
        id: 11,
        name: 'refael',
        email: 'refael@test.com',
        body: 'Some body2',
      },
    ];

    reducer = reducers(intitialState, addManyComments(comments));
    expect(reducer).toEqual({
      comments: {
        '11': {
          body: 'Some body2',
          email: 'refael@test.com',
          id: 11,
          name: 'refael',
          postId: 23232,
        },
        '12121': {
          body: 'Some body',
          email: 'david@test.com',
          id: 12121,
          name: 'david',
          postId: 2121,
        },
      },
      isLogin: false,
    });

    reducer = reducers(intitialState, {
      type: ActionTypes.ANY_ACTIONTYPES_TEST,
      action: MainAction.ANY_MAINACTION_TEST,
    });
    expect(reducer).toEqual({ isLogin: false, comments: {} });
  });
});
