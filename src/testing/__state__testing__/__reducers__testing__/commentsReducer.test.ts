import {
  ActionTypes,
  addManyComments,
  CommentType,
  MainAction,
} from '../../../state/actions';
import { intitialState } from '../../../state/intitialState';
import { commentsReducer } from '../../../state/reducers/commentsReducer';

describe('when every thing ok', () => {
  test('commentsReducer return the right state', () => {
    const comments: CommentType[] = [
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
    let CommentsReducers = commentsReducer.reduce(
      intitialState,
      addManyComments(comments)
    );

    const result = {
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
    };

    expect(CommentsReducers).toEqual(result);

    CommentsReducers = commentsReducer.reduce(intitialState, {
      type: ActionTypes.ANY_ACTIONTYPES_TEST,
      action: MainAction.ANY_MAINACTION_TEST,
    });

    expect(CommentsReducers).toEqual({
      comments: {},
      isLogin: false,
    });
  });
});
