import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from './Logo'

const NavStyles = styled.nav`
  margin-bottom: 2rem;

  .logo {
    transform: translateY(-50%);
  }

  ul {
    display: grid;
    align-items: center
    grid-gap: 1.25rem;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    list-style: none;
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    text-align: center;
  }

  li {
    --rotate: 0deg;
    order: 1;
    transform: rotate(var(--rotate));
  }

  li:nth-child(1) { --rotate:  1.2deg; }
  li:nth-child(2) { --rotate: -2.5deg; }
  li:nth-child(3) { --rotate: -2.0deg; }
  li:nth-child(4) { --rotate:  2.5deg; }
  li:nth-child(5) { --rotate: -2.0deg; }
  li:hover { --rotate: 3deg; }

  a {
    font-size: 1.75rem;
    text-decoration: none;
  }
  a:hover { color: var(--red); }
`

function Navigation () {
  return (
    <NavStyles>
      <ul>
        <li><Link to="/">Hot Now</Link></li>
        <li><Link to="/pizzas">Pizza Menu</Link></li>
        <li><Link to="/"><Logo /></Link></li>
        <li><Link to="/slicemasters">SliceMasters</Link></li>
        <li><Link to="/order">Order Ahead!</Link></li>
      </ul>
    </NavStyles>
  )
}

export default Navigation
