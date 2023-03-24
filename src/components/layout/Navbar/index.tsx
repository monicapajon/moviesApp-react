import { Navbar as NavbarBTS, Container, Nav, } from 'react-bootstrap' //NavDropdown?? Falta a mi
import { NavLink } from 'react-router-dom'
//import "./styles.scss"

const Navbar = () => {

    return (
        < NavbarBTS bg="light" expand="lg">
            <Container fluid>
                <NavbarBTS.Brand href="#home">moviesApp</NavbarBTS.Brand>
                <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBTS.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/populars">Populars</NavLink>
                        <NavLink className="nav-link" to="/latestReleases">Latest Releases</NavLink>
                        <NavLink className="nav-link" to="/betterMovies">Better Movies</NavLink>
                        <NavLink className="nav-link" to="/buscador">Search</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </Nav>
                </NavbarBTS.Collapse>
            </Container>
        </NavbarBTS>
    )
}

export { Navbar }