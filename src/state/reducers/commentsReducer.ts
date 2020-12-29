import _ from 'lodash';
import {
  Action,
  AddManyCommentAction,
  MainAction,
  CommentType,
} from '../actions';
import { State } from '../intitialState';

export class commentsReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case MainAction.ADD_MANY_COMMENT:
        return this.addManycomments(state, action as AddManyCommentAction);
      default:
        return { ...state };
    }
  }
  private static addManycomments(state: State, action: AddManyCommentAction) {
    const payload = action.payload;

    return {
      ...state,
      comments: { ..._.mapKeys<CommentType>(payload, 'id') },
    };
  }
}
