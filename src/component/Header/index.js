import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';


function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://www.youtube.com/watch?v=-oDfgF_8PvM&list=RDMM-oDfgF_8PvM&start_radio=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Music
            </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/signin"
                            activeClassName="header__link--active"
                        >
                            Sign In
            </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;