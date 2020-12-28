import '@testing-library/jest-dom/extend-expect';
import { Router as RouterReactDom } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import App from '../../components/App';
import Router from '../../components/Router';

let renders: any;
describe('When everything is ok', () => {
  beforeEach(() => {
    let renders = render(
      <Router>
        <App />
      </Router>
    );
  });
  test('should be 3 link in the header', async () => {
    screen.getAllByRole('link');
    expect(screen.getAllByRole('link').length).toEqual(3);
  });

  test('should render the correct value in each link', async () => {
    const valueHeader = ['Home', 'Post', 'Signin'];
    valueHeader.forEach((value, index) => {
      expect(screen.getAllByRole('link')[index]).toHaveTextContent(value);
    });
  });

  test('the active link should be change onclick', () => {
    expect(screen.getAllByRole('link')[0].className).toEqual('active item');
    screen.getAllByRole('link').forEach((item, index) => {
      if (index !== 0) {
        expect(item.className).toEqual('item');
      }
    });
    screen.getAllByRole('link').forEach((item, index) => {
      fireEvent.click(item, { button: 0 });
      screen.getAllByRole('link').forEach((items, indexs) => {
        if (indexs !== index) {
          expect(items.className).toEqual('item');
        } else {
          expect(items.className).toEqual('active item');
        }
      });
    });
  });
});

test('should update the url when we click on the link', async () => {
  const history = createMemoryHistory();
  render(
    <RouterReactDom history={history}>
      <App />
    </RouterReactDom>
  );
  fireEvent.click(screen.getAllByRole('link')[0]);

  expect(history.location.pathname).toBe(
    screen.getAllByRole('link')[0].getAttribute('href')
  );
});
