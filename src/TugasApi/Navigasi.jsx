import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

export default class Navigasi extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                            alt=""
                            src="images/logof.r.c.png"
                            width="40"
                            height="30"
                            className="d-inline-block align-top mx-3"
                            />{' '}
                           F.R.C News 
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}