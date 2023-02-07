import React from 'react'
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";

import { AuditBtn, BtnContainer, LaunchAppBtn, NavbarWrapper, NavBtn } from './elements';
const NavbarComp = () => {
  return (
     <NavbarWrapper>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          {/* <img className="img-fluid logo" src={mainlogo} /> */}
          <p className="brandText">ai inu</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#story">Story</Nav.Link>
            <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
            <Nav.Link href="#roadmap">RoadMap</Nav.Link>
          </Nav>
          <BtnContainer>
          <AuditBtn>Audit</AuditBtn>
            <NavBtn>Buy Token</NavBtn>
            <NavBtn>View Chart</NavBtn>
            <LaunchAppBtn>
              Launch App
            </LaunchAppBtn>
          </BtnContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </NavbarWrapper>
  )
}

export default NavbarComp