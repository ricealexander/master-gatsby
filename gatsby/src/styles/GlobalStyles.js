import { createGlobalStyle } from 'styled-components'
import bg from '../assets/images/bg.svg'
import stripes from '../assets/images/stripes.svg'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  html {
    background-image: url(${bg});
    background-attachment: fixed;
    background-size: 450px;
  }

  body {
    font-size: 1.25rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    border: 0;
    border-radius: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    color: white;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    --cast: 2px;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-color: var(--red) var(--white);
    scrollbar-width: thin;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border: 3px solid var(--white);
    border-radius: 6px;
  }

  hr {
    background-image: url(${stripes});
    background-size: 1500px;
    border: 0;
    height: 8px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    display: inline-block;
    position: relative;
    transform: rotate(-2deg);
  }
`

export default GlobalStyles
