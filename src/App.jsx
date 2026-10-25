import { useState } from 'react'
import MainScreen from './components/MainScreen'
import GameScreen from './components/GameScreen'

function App() {
  const [screen, setScreen] = useState('main')

  if (screen === 'game') {
    return <GameScreen onExit={() => setScreen('main')} />
  }

  return <MainScreen onStart={() => setScreen('game')} />
}

export default App