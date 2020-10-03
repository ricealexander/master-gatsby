import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

import 'normalize.css'

function Layout ({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
