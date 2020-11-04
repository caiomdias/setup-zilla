import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

// local
import Layout from '../layout';
import theme from '../../../styles/themes/example';

it('should render Layout component', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>,
  );
  expect(getByTestId('layout-container')).toBeTruthy();
});
