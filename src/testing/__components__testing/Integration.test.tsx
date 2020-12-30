import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import Provider from '../../components/Provider';
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

test('When everything is ok', async () => {
  mockGetUser.mockResolvedValue({
    data: comments,
  });
  let { getByText, findByText, getByRole, getAllByRole, getByTestId } = render(
    <Router>
      <Provider />
    </Router>
  );

  // fetch just once
  expect(mockGetUser).toHaveBeenCalledTimes(1);

  //wait that fetching is remove
  await waitForElementToBeRemoved(() => getByText(/fetching.../i));

  //wait that Posts appear
  await waitFor(() => {
    getByText(/quo vero/);
  });

  expect(await findByText(/earum/)).toBeInTheDocument();

  //click on post
  fireEvent.click(getAllByRole('link')[1]);
  expect(await findByText(/Please connect first!/)).toBeInTheDocument();

  //Simulate connection
  //click on Signin Header
  fireEvent.click(getAllByRole('link')[2]);
  expect(await findByText(/Login/)).toBeInTheDocument();

  //click on login
  fireEvent.click(getByRole('button'));
  expect(await findByText(/Logout/)).toBeInTheDocument();

  //click on post
  fireEvent.click(getAllByRole('link')[1]);
  expect(getByTestId('textArea')).toBeInTheDocument();

  //Simulate deconection
  //click on Signin Header
  fireEvent.click(getAllByRole('link')[2]);
  fireEvent.click(getByRole('button'));
  expect(await findByText(/Login/)).toBeInTheDocument();

  //click on post
  fireEvent.click(getAllByRole('link')[1]);
  expect(await findByText(/Please connect first!/)).toBeInTheDocument();
});
