import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Orders, testId } from '../Orders';
import { store } from '../../../store/store';

describe('Orders', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Orders />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    const progressbar = screen.getByRole('progressbar');

    expect(component).toBeInTheDocument();
    expect(progressbar).toBeInTheDocument();
  });
});
