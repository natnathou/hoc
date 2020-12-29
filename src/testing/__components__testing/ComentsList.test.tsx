import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import CommentsList from '../../components/CommentsList';

let rendering: RenderResult<
  typeof import('@testing-library/dom/types/queries')
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
