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

  & > * {
    opacity: ${props => !props.$activated && props.$activable ? '0.5' : '1'}
  }

  .header {
    padding: .3rem .7rem .3rem .5rem;
    text-transform: uppercase;
    letter-spacing: .05rem;
    border-bottom: 2px solid #222325;
    box-shadow: 0 2px 0 -1px #525457;
    display: flex;

    h1 {
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0;
    }

    .led-container {
      width: .8rem;
      align-self: stretch;
      margin-right: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .led {
      display: ${props => props.$activable ? 'block' : 'none'};
      --current-color: var(--led-color-${props => props.$activated ? props.$activatedLedColor : 'off'});
      width: .7rem;
      height: .7rem;
      border-radius: 100%;
      background-color: var(--current-color);
      box-shadow: 0 0 7px var(--current-color);
    }
  }

  .content {
    padding: .7rem;
    position: relative;
  }

  .content::before {
    display: ${props => props.$activable && !props.$activated ? 'block' : 'none'};
    content: '';
    position: absolute;
    inset: 0;
    z-index: 10;
  }
`

export default function Block({children, title, activable, activated, activatedLedColor = 'yellow'}) {
  return <StyledBlock $activated={activated} $activable={activable} $activatedLedColor={activatedLedColor}>
    <div className="header">
      <div className="led-container">
        <div className="led"></div>
      </div>
      <h1>{title}</h1>
    </div>
    <div className="content">{children}</div>
  </StyledBlock>
}

