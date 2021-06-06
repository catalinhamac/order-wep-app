import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Pairs, testId, title } from '../Pairs';
import { store } from '../../../store/store';

describe('Pairs', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pairs items={[]} />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    const heading = screen.getByText(title);

    expect(component).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
