import styled from "styled-components"

const Knob = styled.div`
  position: relative;

  .circle {
    --size: 32px;
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: #2b3033;
    border-radius: 50%;
    left: 14px;
    top: 15.5px;
    box-shadow: 0 0 0 3px #14191c;
    transform: rotate(-125deg);
  }

  .circle::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 3px;
    background-color: lightblue;
    left: 50%;
    transform: translateX(-50%) translateY(5px) rotate(90deg);
    border-radius: 2px;
  }
`

export default function() {
  return <Knob>
    <div className="circle"></div>
    <svg viewBox="0 0 100 80" width="60" height="60">
      <path d="M20,60a35,35 0 1,1 60,0" stroke="#666d72" stroke-width="7" fill="none" stroke-linecap="round"></path>
      <path d="M20,60a35,35 0 1,1 60,0" stroke="#24c1e9" stroke-width="7" pathLength="20" fill="none" stroke-linecap="round" stroke-dasharray="17 35" marker-end="url(#dot)"></path>
    </svg>
  </Knob>
}

// stroke dasharray "0-20 35"