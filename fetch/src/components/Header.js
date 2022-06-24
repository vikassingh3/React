import React from 'react'
import { Link, } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'


function Header() {
  return (
    <>
      <Navbar >
        <Container>
          <Nav >
            <Nav style={{ marginRight: "20px" }}><Link to="/">Home</Link></Nav>
            <Nav ><Link to="/contact">Contact</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header