import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './logo.jpeg'

const Header = () => {
    return (
        <header className="mb-0">
            <Navbar collapseOnSelect bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            MyZuriCV
                        </Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
