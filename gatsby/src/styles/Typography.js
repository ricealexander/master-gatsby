import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/frenchfries.woff'

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }

  html {
    color: var(--black);
    font-family: FrenchFries, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p, li {
    letter-spacing: 0.5px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  mark, .mark {
    background: var(--yellow);
    display: inline;
    line-height: 1;
    margin: 0;
    padding: 0 2px 2px 2px;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
