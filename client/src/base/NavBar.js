import React, { useState } from 'react';
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
  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorageManager.removeUser();
    console.log('User signed out');
  };

  const { user } = localStorageManager.getUser();

  return (
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
              Mike
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
}

export default NavBar;
