import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav } from 'react-bootstrap';

const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <Nav.Link href="/" >Account-Owner</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/owner-list">Owner Actions</Nav.Link>
                        <Nav.Link href="/account-list">Account Actions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}
 
export default navigation;