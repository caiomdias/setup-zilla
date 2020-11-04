import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom/extend-expect'

// local
import Home from '../index'
import theme from '../../styles/themes/example'

it('should render Home component', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
  expect(getByText('SetUp-Zilla')).toBeTruthy()
})
