import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import axios from 'axios';
import { mocked } from 'ts-jest/utils';

import App from '../../components/App';
import Router from '../../components/Router';
import { CommentType } from '../../state/actions';

const axiosMock = jest.spyOn(axios, 'get');
const mockGetUser = mocked(axiosMock, true);

const comments: CommentType[] = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
  },
  {
    postId: 2,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
  },
];

describe('when everything is ok', () => {
  beforeEach(() => {});
  test('fetch comment just once', async () => {
    mockGetUser.mockResolvedValue({ data: { comments } });
    let { getByText } = render(
      <Router>
        <App />
      </Router>
    );

    await waitForElementToBeRemoved(() => getByText(/fetching.../i));
    expect(mockGetUser).toHaveBeenCalledTimes(1);
  });
});
