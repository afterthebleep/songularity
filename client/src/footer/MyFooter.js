import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
          <nav class="navbar bg-faded">
            <div class="container">
              <ul class="nav navbar-nav pull-sm-center">
                <li class="nav-item">
                  <a class="nav-link" href="#">Previous</a>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-logo mx-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Play | STOP</a>
                </li>
              </ul>
              <ul class="nav navbar-nav pull-sm-center">
                <li class="nav-item">
                  <a class="nav-link" href="#">Next</a>
                </li>
              </ul>
            </div>
          </nav>
   
    );
  }
}
export default MyFooter;
