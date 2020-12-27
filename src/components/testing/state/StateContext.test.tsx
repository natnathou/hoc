import { render } from '@testing-library/react';
import { intitialState } from '../../../state/intitialState';
import { reducers } from '../../../state/reducers';
import { StateProvider } from '../../../state/StateContext';

describe('when everything is ok', () => {
  test('StateProvider is render', () => {
    render(<StateProvider reducers={reducers} intitialState={intitialState} />);
  });
});
