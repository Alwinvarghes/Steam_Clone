import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    
       <Navbar className="header p-4">
        <Container>
          <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>
            <img 
              alt=""
              src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
              width="176"
              height="44"
              className="d-inline-block align-top"
            />{' '} <Nav className="me-auto ">
            <Nav.Link href="#home" className='text-light fs-5'>STORE</Nav.Link>
            <Nav.Link href="#features" className='text-light fs-5'>COMMUNITY</Nav.Link>
            <Nav.Link href="#pricing" className='text-light fs-5'>ABOUT</Nav.Link>
            <Nav.Link href="#pricing" className='text-light fs-5'>SUPPORT</Nav.Link>
          </Nav>
            </Navbar.Brand>
            <div className='install'>
            <button className='button me-3'>Install Steam</button>
            <p className='me-2'>login</p>
            <p className='me-2'>|</p>
            <p>languge</p>
            </div>
            
           </Container>
      </Navbar>
    
  )
}

export default Header
