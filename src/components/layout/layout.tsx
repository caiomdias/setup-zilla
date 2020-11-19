import React from 'react';

// Styles
import { Container } from '../../styles/components/layout';

export const Layout: React.FC = ({ children }) => <Container data-testid="layout-container">{children}</Container>;
