import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarToggleButton = () => (
  <Navbar.Toggle
    bsPrefix="navbar-toggle"
    children={
      <>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </>
    }
  />
);

export default NavbarToggleButton;
