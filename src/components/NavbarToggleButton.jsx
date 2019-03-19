import React from 'react';
import PropTypes from 'prop-types';

const NavbarToggleButton = ({ onClick }) => (
  <button className="navbar-toggle" type="button" onClick={onClick}>
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </button>
);

NavbarToggleButton.propTypes = {
  onClick: PropTypes.func,
};

export default NavbarToggleButton;
