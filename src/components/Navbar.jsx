// src/components/Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem; /* Increase padding for larger banner */
  background-color: #333;
  color: white;
  position: fixed; /* Fix to top */
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
  box-sizing: border-box; /* Ensure padding is included in element's width */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem; /* Increase gap between links */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 1rem; /* Add margin to the right */

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 60px;
  right: 1rem; /* Add some padding to the right */
  background-color: #333;
  padding: 1rem;
  border-radius: 5px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(ScrollLink)`
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div>Logo</div>
      <NavLinks>
        <NavLink to="home" smooth={true} duration={1000}>
          Home
        </NavLink>
        <NavLink to="projects" smooth={true} duration={1000}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={1000}>
          Contact
        </NavLink>
      </NavLinks>
      <Hamburger onClick={toggleNav}>
        <span />
        <span />
        <span />
      </Hamburger>
      {isOpen && (
        <MobileNavLinks>
          <MobileNavLink to="home" smooth={true} duration={1000} onClick={toggleNav}>
            Home
          </MobileNavLink>
          <MobileNavLink to="projects" smooth={true} duration={1000} onClick={toggleNav}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="contact" smooth={true} duration={1000} onClick={toggleNav}>
            Contact
          </MobileNavLink>
        </MobileNavLinks>
      )}
    </Nav>
  );
};

export default Navbar;
