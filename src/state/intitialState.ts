import { CommentType } from './actions';

export interface State {
  isLogin: boolean;
  comments: { [x: string]: CommentType };
}

export const intitialState: State = {
  isLogin: false,
  comments: {},
};
