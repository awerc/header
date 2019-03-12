import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

import Logo from './Logo';
import NavbarToggle from './NavbarToggleButton';
import ProfileIcon from './ProfileIcon';
import PowerIcon from './PowerIcon';
import GraduationIcon from './GraduationIcon';

import { MENU_ITEMS } from '../constants/LayoutConstants';

const NavigationBar = () => (
  <Navbar expand="xl">
    <Navbar.Brand href="#home">
      <Logo />
      <span className="brand-title">Web - Регистратор</span>
    </Navbar.Brand>
    <NavbarToggle />
    <Navbar.Collapse>
      <Nav className="nav-menu">
        {MENU_ITEMS.map(({ name, mod, link, submenu }) => submenu ? (
          <NavDropdown title={name} bsPrefix={cn("custom-navlink", mod)}>
            {submenu.map(({ name, link }, index) => (
              <NavLink key={index} className="dropdown-item" to={link}>
                {name}
              </NavLink>
            ))}
          </NavDropdown>
        ) : (
          <Nav.Link bsPrefix="custom-navlink" href={link}>
            {name}
          </Nav.Link>
        ))}
      </Nav>
      <NavDropdown
        title={
          <span className="profile-title">
            <GraduationIcon />
            Burtsev
            <span className="light-text">Вендор</span>
          </span>}
        bsPrefix="custom-navlink profile-dropdown"
      >
        <NavDropdown.Item href="http://reg.test.keydisk.ru/PreReleaseNew/Account/Index">
          <ProfileIcon />
          Профиль
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="http://reg.test.keydisk.ru/PreReleaseNew/Account/Index">
          <PowerIcon />
          Выйти
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
