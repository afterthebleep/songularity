import React, { Component } from "react";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SONGULARITY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Customize" id="basic-nav-dropdown">
              <NavDropdown.Item href="#add-new-song">Add New Song</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNavbar;
