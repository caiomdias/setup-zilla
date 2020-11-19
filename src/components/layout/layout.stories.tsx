import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from './layout';
import theme from '../../styles/themes/example';

export default {
  title: 'DefaultLayout',
};

export const DefaultLayout: React.FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Layout> My Layout </Layout>
  </ThemeProvider>
);
