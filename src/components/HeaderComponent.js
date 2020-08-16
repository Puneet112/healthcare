import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <Navbar fixed="top" expand="lg">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <span className="fa fa-stethoscope"></span> Swasthya
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span>Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span>About us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/services">
                    <span>Services</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span>Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                    {/* <span className="fa fa-sign-in fa-lg"></span>*/} Login
                  </Button>
                  <NavLink to="/signup">
                    <Button onClick={this.toggleModal}>
                      <span className="fa fa-user-plus fa-lg"></span> Sign Up
                      {/*<span className="fa fa-user-plus fa-lg"></span>*/}
                      Sign Up
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
export default Header;
