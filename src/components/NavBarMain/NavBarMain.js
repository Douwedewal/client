import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import RegisterButton from '../../components/RegisterButton/RegisterButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import MyAccountButton from '../../components/MyAccountButton/MyAccountButton';
import logo from '../../assets/main_logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function NavBarMain() {
  if (sessionStorage.getItem("token") === null) {
    return (
      <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="Fuming Frets Logo"
          />
        </Navbar.Brand>
        <Link to="/songsection">Song Section</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Form inline>
          <LoginButton></LoginButton>
          <RegisterButton></RegisterButton>
        </Form>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Link to="/songsection">Song Section</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Form inline>
          <LogoutButton />
          <MyAccountButton />
        </Form>
      </Navbar>
    )
  }
}

export default NavBarMain;