import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import localStorageManager from '../utils/LocalStorageManager';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorageManager.removeUser();
    setIsLoggedIn(false);
    console.log('User signed out');
  };

  const authenticated = localStorageManager.getUser();

  const redirectUser = () => {
    if (!isloggedIn) {
      return <Redirect to='/' />;
    }
  };

  const navbar = () => (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>cobra kai</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/workouts'>workouts</NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              {authenticated ? authenticated.user.name : ''}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={logout}>Logout</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );

  return (
    <div>
      {navbar()}
      {redirectUser()}
    </div>
  );
}

export default NavBar;
