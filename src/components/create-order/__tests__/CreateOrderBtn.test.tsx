import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

import { CreateOrderBtn, testId, title } from '../CreateOrderBtn';
import { store } from "../../../store/store";

describe('CreateOrderBtn', () => {
  it('should render without errors', () => {
    render(<Provider store={store}><BrowserRouter>
      <CreateOrderBtn />
    </BrowserRouter></Provider>);

    const component = screen.getByTestId(testId);
    const heading = screen.getByText(title);
    const btn = screen.getByRole('button');    

    expect(component).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
