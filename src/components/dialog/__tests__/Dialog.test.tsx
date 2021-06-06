import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Dialog, testId, title, text } from '../Dialog';
import { store } from '../../../store/store';

describe('Dialog', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dialog open />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    const heading = screen.getByText(title);
    const paragraph = screen.getByText(text);

    expect(component).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
