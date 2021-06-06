import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CreateOrder, testId } from '../CreateOrder';
import { store } from '../../../store/store';

describe('CreateOrder', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateOrder />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
  });
});
