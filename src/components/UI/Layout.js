import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import 'normalize.css'

import Theme from './Theme'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
