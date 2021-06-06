import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Items, testId } from '../Items';
import { store } from '../../../store/store';

describe('Items', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Items items={[]} handleCancel={jest.fn} />
        </BrowserRouter>
      </Provider>
    );

    const component = screen.getByTestId(testId);
    const table = screen.getByRole('table');

    expect(component).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
});
