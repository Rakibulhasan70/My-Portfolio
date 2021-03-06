import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../src/image/logo5.jpg'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '//#region 121b27' }} sticky='top'>
                <Container className='mt-2'>
                    <Navbar.Brand as={NavLink} to="/home"><img className='mt-1' style={{ width: '50px', height: '50px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link className='text-white ms-3 ' as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white ms-3' as={NavLink} to="/allprojects">Projects</Nav.Link>
                            <Nav.Link className='text-white ms-3' as={NavLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-white ms-3' href="home#contact">Contact</Nav.Link>
                            <Nav.Link className='text-white ms-3' href="home#about">About</Nav.Link>
                            <button className='rounded ms-3 header-resume'><a href="https://drive.google.com/file/d/1e9g5uvlfqyMZ9e3vsZJjoGLP1fdMHQU_/view?usp=sharing" style={{ textDecoration: 'none', color: '#64FFDA' }}>Resume</a></button>
                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </ >
    );
};

export default Header;