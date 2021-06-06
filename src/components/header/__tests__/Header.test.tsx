import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import { Header, testId } from '../Header';

describe('Header', () => {
  it('should render without errors', () => {
    render(<BrowserRouter>
      <Header />
    </BrowserRouter>);

    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
  });
});
