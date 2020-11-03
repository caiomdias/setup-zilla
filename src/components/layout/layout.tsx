import React from 'react'

// Styles
import { Container } from '../../styles/components/layout'

const Layout: React.FC = ({ children }) => {
  return <Container data-testid="layout-container">{children}</Container>
}

export default Layout
