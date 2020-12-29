import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import CommentsList from '../../components/CommentsList';

let rendering: RenderResult<
  typeof import('e:/Biblioth\u00E8que/Documents/React/hoc - Copie/node_modules/@testing-library/dom/types/queries')
>;

describe('when everything is ok', () => {
  beforeEach(() => {
    rendering = render(<CommentsList neverFetch={true} />);
  });

  test('Component is rendering', () => {});

  test('Contain  the text fetching', async () => {
    expect(await rendering.findByText(/fetching/)).toBeInTheDocument();
  });
});
