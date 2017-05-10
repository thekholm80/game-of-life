const React = require('react');
const Header = require('./Header');
const GameBoard = require('./GameBoard');
const generateInitialBoard = require('../Utilities/generateInitialBoard');

function App() {
  return (
    <div>
      <Header title="Game of Life" />
      <GameBoard board={generateInitialBoard()} />
    </div>
  )
}

module.exports = App;
