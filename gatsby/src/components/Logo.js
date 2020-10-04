import React from 'react'
import styled from 'styled-components'
import stripes from '../assets/images/stripes.svg'

const LogoStyles = styled.div`
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  /* This value controls the entire size of the logo */
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  margin: 0;
  height: 30em;
  width: 30em;

  .inner {
    background: white;
    display: grid;
    align-content: center;
    flex: 1;
    grid-template-rows: 20% 1fr 1fr;
    margin: var(--borderSize);
  }

  .est {
    align-self: center;
    font-size: 1.5em;
  }

  h1 {
    display: grid;
    align-items: center;
    grid-gap: 2em;
    grid-row: 2 / span 2;
    grid-template-rows: 8fr 2fr;
    margin: 0;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }

  .slicks {
    display: block;
    perspective: 100px;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    transform: scale(1.4);
  }

  .letter {
    --rotate: -10deg;
    --rotateX: 0deg;
    --scale: 1;
    --translateX: 0;
    --translateY: 0;

    color: var(--red);
    display: inline-block;
    font-size: 5em;
    line-height: 1;

    transform:
      scale(var(--scale))
      rotate(var(--rotate))
      translateX(var(--translateX))
      translateY(var(--translateY))
      rotateX(var(--rotateX));

    transition: transform 0.3s;
  }

  .letter.S {
    --translateX: -0.05;
  }
  .letter.l {
    --rotate: 2deg;
    --scale: 1.4;
    --translateX: 0.05em;
    --translateY: -0.05em;
  }
  .letter.i {
    --scale: 0.9;
    --translateY: -0.1em;
    --translateX: 0.1em;
  }
  .letter.c {
    --rotate: 3deg;
    --scale: 0.9;
    --translateX: 0.1em;
    --translateY: 0.23em;
  }
  .letter.k {
    --rotate: -12deg;
    --scale: 1.2;
    --translateX: 0.06em;
  }
  .letter.apos {
    --translateX: 0.1em;
  }
  .letter.s {
    --rotate: 12deg;
    --scale: 0.9;
    --translateY: -0.14em;
  }
`

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1994</span>
        <h1>
          <span className="slicks">
            <span className="letter S">S</span>
            <span className="letter l">l</span>
            <span className="letter i">i</span>
            <span className="letter c">c</span>
            <span className="letter k">k</span>
            <span className="letter apos">’</span>
            <span className="letter s">s</span>
          </span>
          <span className="slices">slices</span>
        </h1>
      </div>
    </LogoStyles>
  )
}
