import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Signin from '../../components/Signin';

let rendering: RenderResult<
  typeof import('@testing-library/dom/types/queries')
>;

describe('when everything is ok', () => {
  beforeEach(() => {
    rendering = render(<Signin />);
  });

  test('Component is rendering', async () => {
    let { findByText, getByRole } = rendering;

    expect(getByRole('button')).toBeInTheDocument();
    expect(await findByText(/Login/)).toBeInTheDocument();
  });
});
