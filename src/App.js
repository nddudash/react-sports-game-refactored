import React from 'react';
import './App.css';
import Game from './components/game/Game'
import squirrelsSrc from './assets/images/squirrel.png'
import raccoonsSrc from './assets/images/raccoon.png'
import bunniesSrc from './assets/images/bunny.png'
import houndsSrc from './assets/images/hound.png'

function App() {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonsSrc
  }
  
  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelsSrc
  }
  
  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunniesSrc
  }
  
  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsSrc
  }
  
  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
