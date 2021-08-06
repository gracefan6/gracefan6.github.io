import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-overall">
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand className="NavBar-name">grace fan</Navbar.Brand>
          <Nav.Link className="NavBar-pages" href="/about">about</Nav.Link>
          <Nav.Link className="NavBar-pages" href="/projects">projects</Nav.Link>
        </Navbar>
      </div>
    );
  }

}
export default NavBar