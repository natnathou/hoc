import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Form from '../../components/Form';

let rendering: RenderResult<
  typeof import('@testing-library/dom/types/queries')
>;

describe('when everything is Ok', () => {
  beforeEach(() => {
    rendering = render(<Form />);
  });

  test('form rendering', () => {});

  test('contain a form & a button', () => {
    const { getByRole } = rendering;

    expect(getByRole('form')).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('value of the text change when we type', async () => {
    const someInput = 'Some Input';
    const { getByTestId, findByText } = rendering;

    expect(getByTestId('textArea')).toBeInTheDocument();

    fireEvent.change(getByTestId('textArea'), { target: { value: someInput } });

    expect(await findByText(someInput)).toBeInTheDocument();
  });
});
