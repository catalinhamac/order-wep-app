import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App, testId } from '../App';
import { store } from '../../../store/store';

describe('App', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
  });
});
