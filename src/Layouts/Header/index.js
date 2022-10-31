import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, 
  Collapse, NavItem, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import NavLink from "react-router-dom/NavLink";

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
        <div className="col-8">
        </div>
        <div className="col-4 top-address">
        <div className="row">
        <div className="col-6">
        <span className="fa fa-map-marker fa-sm"></span> Company Address type here
        </div>
        <div className="col-6">
        <span className="fa fa-phone fa-sm"></span> +94 000 00000
        </div>
        </div>
        </div>
        <div className="col-12">
        <Navbar dark expand="md">
          <div className="container">
            <div className="row">
            <div className="col-1">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <span className="logo">LOGO</span>  
            </NavbarBrand>
            </div>
            <div className="col-11">
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/news">
                  News
                </NavLink>
              </NavItem>
              
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button className="btn-contact" to="/contactus" outline>
                  Contact Us
                </Button>
              </NavItem>
            </Nav>
            </Collapse>
            </div>
            </div>
          </div>
        </Navbar>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
