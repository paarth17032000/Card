import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { GoMarkGithub } from "react-icons/go";

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="mr-auto ml-4">
                    W I S H E S
                </Navbar.Brand>
                <Nav className="mr-sm-2">
                    <Nav.Link 
                        href="https://www.github.com/paarth17032000"
                        style={{
                            fontSize: "25px",
                            color: "white"
                            }}   
                    >
                        <GoMarkGithub />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
