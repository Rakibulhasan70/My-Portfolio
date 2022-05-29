import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className='mt-2'>
                    <Navbar.Brand href="#home">Rakibul Hasan Sohag</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link className='text-white ms-3 nav' as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white ms-3' as={NavLink} to="/projects">Projects</Nav.Link>
                            <Nav.Link className='text-white ms-3' as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link className='text-white ms-3' as={NavLink} to="/about">About</Nav.Link>
                            <button className='rounded ms-3 header-resume'>Resume</button>
                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >
            {/* <div className='social text-white'>
                <ul className='ul'>
                    <li>s</li>
                    <li>c</li>
                    <li>d</li>
                    <li>x</li>
                    <li>v</li>
                </ul>
            </div> */}
        </div >
    );
};

export default Header;