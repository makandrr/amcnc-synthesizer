import styled from "styled-components";
import metalTexture from '../assets/metal.jpg'

const StyledBlock = styled.div`
  /* background-image: linear-gradient(to right, #272729, #3f4041); */
  background-image: url(${metalTexture});
  background-size: calc(var(--synthesizer-width) + 30%) calc(var(--synthesizer-height) + 20%);
  background-position: center center;
  background-attachment: fixed;
  padding-bottom: 1rem;
  border-radius: 3px;
`

const BlockHeader = styled.div`
  padding: .3rem .7rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: .05rem;
  border-bottom: 2px solid #222325;
  box-shadow: 0 2px 0 -1px #525457;
`

const BlockContent = styled.div`
  padding: .7rem;
`

export default function Block({children, title}) {
  return <StyledBlock>
    <BlockHeader>{title}</BlockHeader>
    <BlockContent>{children}</BlockContent>
  </StyledBlock>
}

