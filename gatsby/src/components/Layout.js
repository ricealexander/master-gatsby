import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import GlobalStyles from '../styles/GlobalStyles'

import 'normalize.css'

function Layout ({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
