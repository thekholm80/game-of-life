const React = require('react');
const PropTypes = require('prop-types');

function Header(props) {
  return (
    <div className="header">
      {props.title}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

module.exports = Header;
