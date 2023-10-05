//import {Fragment} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom';

const NavBarExample = () => {
    return(
        //<Fragment> Otra forma de fragmentar el código
        <>
            <Navbar expand="lg" className="navBg " variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Link> </Link> Forma correcta de linkear, pero rompería el diseño de Bootstrap -> usamos as y to */}
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>

        </>
        //</Fragment>
    )
};

export default NavBarExample;
