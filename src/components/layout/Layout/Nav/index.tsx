import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useMe } from '../../../../hooks';



const NavBar = () => {

     const { logout, me } = useMe();
  
  
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-nav">
          {me && (
              <div>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/latestReleases">
                  Latest Releases
                </NavLink>
                <NavLink className="nav-link" to="/betterMovies">
                  Better Movies
                </NavLink>
                <NavLink className="nav-link" to="/populars">
                  Popular Movies
                </NavLink>
                <NavLink className="nav-link" to="/buscador">
                  Search
                </NavLink>
              </div>
            )}

            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <Nav.Link className="nav-link" onClick={logout}>
              Logout
            </Nav.Link>
            <NavLink className="nav-link" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
    };
    
    export { NavBar };














      {/* // <Navbar collapseOnSelect expand="lg" className="nav-styles">
      //   <Container>
      //     <NavLink className="nav-link navbar-brand" to="/">Movies <span className="ada">ADA</span></NavLink>
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav className="ms-auto justify-content-end">
      //         <NavLink className="nav-link" to="/recently">Recently Movie</NavLink>
      //         <NavLink className="nav-link" to="/popular">Popular Movies</NavLink>
      //         <NavLink className="nav-link" to="/topRated">Top Rated Movies</NavLink>
      //         <NavLink className="nav-link text-white" to="/search/movie">Search</NavLink>
   */}
             {/* <Nav.Link className='fw-bold' onClick={logout}>Sign Out</Nav.Link> */}
  //------------------
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
  
   