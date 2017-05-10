const React = require('react');
const PropTypes = require('prop-types');

function GameCell(props) {
  return (
    <div
      id={ props.id }
      className="game-cell"
      style={ props.isAlive ? { background: "#FC7290" } : null }
      onClick={ () => {
        props.callHome(
          props.id,
          props.row,
          props.isAlive)
      }} />
  )
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  isAlive: PropTypes.bool.isRequired,
  callHome: PropTypes.func.isRequired
}

module.exports = GameCell;
