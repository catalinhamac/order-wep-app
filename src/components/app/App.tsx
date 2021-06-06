import React from 'react';
import Container from '@material-ui/core/Container';

import { Routes } from '../routes/Routes';
import { Header } from '../header/Header';

export const testId = 'appTestId';

export const App = (): JSX.Element => (
  <Container className="App" data-testid={testId}>
    <Header />
    <Routes />
  </Container>
);
