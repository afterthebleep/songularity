import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Form inline>
            <Button variant="outline-success">Previous</Button>
            <Button variant="outline-success">Play</Button>
            <Button variant="outline-success">Next</Button>
          </Form>
        </Navbar.Collapse>
        </Navbar>
      
    );
  }
}
export default MyFooter;
