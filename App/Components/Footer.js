const React = require('react');
const PropTypes = require('prop-types');

function Footer(props) {
  return (
    <div className="footer">
      <div
        className="button"
        onClick={ props.isRunning
                  ? props.pause
                  : props.start }>
        {props.isRunning ? 'Pause' : 'Run'}
      </div>
      <div className="button" onClick={ props.step }>Step</div>
      <div className="button" onClick={ props.reset }>Reset</div>
    </div>
  )
}

Footer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  step: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired
}

module.exports = Footer;
