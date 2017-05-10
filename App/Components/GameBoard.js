const React = require('react');
const PropTypes = require('prop-types');
const Header = require('./Header');
const Footer = require('./Footer');
const GameCell = require('./GameCell');
const generateNextGameBoard = require('../Utilities/generateNextGameBoard');
const generateInitialBoard = require('../Utilities/generateInitialBoard');

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.nextGameBoard = generateNextGameBoard(this.props.board);

    this.state = {
      isRunning: true,
      gameBoard: this.props.board.slice(),
      generation: 0
    };

    this.callHome = this.callHome.bind(this);
    this.tick = this.tick.bind(this);
    this.pause = this.pause.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.step = this.step.bind(this);
  }

  callHome(id, row, isAlive) {
    let board = this.state.gameBoard.slice();

    board[row][id] = !isAlive;

    this.setState({ gameBoard: board.slice() });
  }

  tick() {
    const board = generateNextGameBoard(this.state.gameBoard);

    this.setState(
      (prevState) => {
        return {
          gameBoard: board,
          generation: prevState.generation + 1
        };
      }
    );
  }

  pause() {
    clearInterval(this.timerID);
    this.setState({ isRunning: false });
  }

  start() {
    this.timerID = setInterval(() => this.tick(), 150);
    this.setState({ isRunning: true });
  }

  reset() {
    const board = this.state.gameBoard.map((row) => {
      return row.map((cell) => {
        return false;
      });
    });

    clearInterval(this.timerID);

    this.setState({
      gameBoard: board.slice(),
      generation: 0,
      isRunning: false
    });
  }

  step() {
    if (this.state.isRunning) return false;

    const board = generateNextGameBoard(this.state.gameBoard);

    this.setState(
      (prevState) => {
        return {
          gameBoard: board,
          generation: prevState.generation + 1
        };
      }
    );
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 150);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="game-board">
        <Header title={ "Generation: " + this.state.generation } />
        <div className="game-body">
          {this.state.gameBoard.map((boardRow, row) => {
              return boardRow.map((isAlive, index) => {
                return (
                  <GameCell
                    key={ index.toString() }
                    row={ row }
                    id={ index }
                    isAlive={ isAlive }
                    callHome={ this.callHome } />
                );
              });
          })}
        </div>
        <Footer
          isRunning={ this.state.isRunning }
          pause={ this.pause }
          start={ this.start }
          reset={ this.reset }
          step={ this.step } />
      </div>
    );
  }
}

GameBoard.propTypes = {
  board: PropTypes.array.isRequired
}

module.exports = GameBoard;
