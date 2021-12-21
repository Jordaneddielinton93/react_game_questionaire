import { render, screen } from '@testing-library/react';
import { inistialState, reducer } from '../Hooks/useReducer';




test('renders learn react link', () => {
  

  let app = render(<App reducer={reducer} inistialState={inistialState} />);

  

});
