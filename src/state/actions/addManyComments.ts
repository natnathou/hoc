import { ActionTypes, MainAction } from '.';

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface AddManyCommentAction {
  type: ActionTypes.COMMENTS;
  action: MainAction.ADD_MANY_COMMENT;
  payload: CommentType[];
}
export const addManyComments = (
  comments: CommentType[]
): AddManyCommentAction => {
  return {
    type: ActionTypes.COMMENTS,
    action: MainAction.ADD_MANY_COMMENT,
    payload: comments,
  };
};
