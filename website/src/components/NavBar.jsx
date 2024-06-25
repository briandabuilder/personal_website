import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" className="navbar-custom">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="collapsed-items">
                        <Nav className="ml-auto">
                            <div className="special-item p-1 mx-4">
                                <Nav.Link href="https://github.com/briandabuilder" className="nav-link-item">Github</Nav.Link>
                            </div>
                            <div className="special-item p-1 mx-4">
                                <Nav.Link href="https://www.linkedin.com/in/brian-da-cruz-25a086218" className="nav-link-item">LinkedIn</Nav.Link>
                            </div>
                            <div className="special-item p-1 mx-4">
                                <Nav.Link href="/resume.pdf" className="nav-link-item">Resume</Nav.Link>
                            </div>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>ˇ
        </div>
    );
}

export default NavBar;
