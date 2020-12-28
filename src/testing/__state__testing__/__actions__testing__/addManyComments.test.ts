import {
  ActionTypes,
  addManyComments,
  Comment,
  MainAction,
} from '../../../state/actions';

describe('when everything ok', () => {
  test('should return the right object width an array of comment', () => {
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
    const AddManyComments = addManyComments(comments);
    expect(AddManyComments).toEqual({
      type: ActionTypes.COMMENTS,
      action: MainAction.ADD_MANY_COMMENT,
      payload: comments,
    });
  });
});
