import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Navigation from './Navigation'

import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import stripes from '../assets/images/stripes.svg'

const SiteBorderStyles = styled.div`
  background: white url(${stripes});
  background-size: 1500px 1500px;
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  margin: 7.5rem auto 2.5rem auto;
  margin-top: clamp(1.25rem, 10vw, 7.5rem);
  padding: 5px;
  padding: clamp(0.25rem, 1vw, 1.5rem);
  max-width: 1000px;

  @media(max-width: 1100px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
const ContentStyles = styled.div`
  background-color: white;
  padding: 1.25rem;
`

function Layout ({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <SiteBorderStyles>
        <ContentStyles>
          <Navigation />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  )
}

export default Layout
