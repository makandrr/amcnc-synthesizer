import styled from "styled-components"
import metalBrightTexture from '../assets/metalBright.jpg'

export default styled.div`
  background-image: url(${metalBrightTexture});
  background-size: calc(var(--synthesizer-width) + 30%) 50%;
  background-position: center;
  background-attachment: fixed;
  padding: .3rem .6rem;
  font-size: .9rem;
  color: #3ac0e6;
  text-transform: uppercase;
  font-weight: 500
`