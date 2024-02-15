import Block from "./components/Block"
import SynthesizerGrid from './components/SynthesizerGrid'
import SynthesizerContainer from "./components/SynthesizerContainer"
import Header from "./components/Header"

function App() {
  

  return (
    <SynthesizerContainer>
      <Header>
        AmCNC Synthesizer
      </Header>
      <SynthesizerGrid>
        <Block title="block 1">fjd fds jflksd jflksdj lkjsd lkfjdlk</Block>
        <Block activable={true} activated={true} title="block 2">fjd</Block>
        <Block activable={true} activated={true} activatedLedColor="green" title="block 3">fjd</Block>
        <Block activable={true} title="block 4">fjd</Block>
      </SynthesizerGrid>
    </SynthesizerContainer>
  )
}

export default App
