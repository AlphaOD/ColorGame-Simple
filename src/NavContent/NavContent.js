import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as ROUTES from "/src/Constants/Routes";
import {
  Navbar,
  Brand,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";

//import LandingPage from "../Landing";
//import SignUpPage from "../SignUp";
//import SignInPage from "../SignIn";
//import PasswordForgetPage from "../PasswordForget";
import HomePage from "/src/index";
import ColorsPage from "/src/Colors";
//import AccountPage from "../Account";
//import AdminPage from "../Admin";

class NavContent extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to={ROUTES.HOME}>Home</Link>
          </Nav.Link>

          <Nav.Link id="home" href="#home">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </Nav.Link>
          <Nav.Link href="#home">
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#/Colors.html">
              <Link to={ROUTES.Colors}>Colors</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              <Link to={ROUTES.LANDING}>Landing</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Router>
    );
  }
}

export default NavContent;

/*<Nav className="mr-auto">
          <Nav.Link href="#home">
            <Route path={ROUTES.HOME} component={HomePage} />
            Home
          </Nav.Link>

          <Nav.Link id="home" href="#home">
            <Route path={ROUTES.SIGN_IN} component={HomePage} />
          </Nav.Link>
          <Nav.Link href="#home">
            <Route path={ROUTES.ACCOUNT} component={HomePage} />
          </Nav.Link>
          <Nav.Link href="#home">
            <Route path={ROUTES.SIGN_UP} component={HomePage} />
          </Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#/Colors.html">
              <Route path={ROUTES.HOME} component={ColorsPage} />
              Colors
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Route path={ROUTES.ADMIN} component={HomePage} />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              <Route exact path={ROUTES.LANDING} component={HomePage} />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              <Route path={ROUTES.PASSWORD_FORGET} component={HomePage} />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>*/
