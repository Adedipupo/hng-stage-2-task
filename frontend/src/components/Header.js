import React from 'react'
import { Navbar,Nav, Container } from "react-bootstrap";
import logo from './logo.jpeg'

const Header = () => {
    return (
        <header className="mb-0">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Portfolio
                    </Navbar.Brand>
                    <Nav className="mr-auto" style={{color: 'white'}}>
                    <Nav.Link href='#href'>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
