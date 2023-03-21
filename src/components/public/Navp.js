import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '.../assets/img/logo.svg';
import { Link } from "react-router-dom";

export const Navp = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={'.../assets/img/logo.svg'} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#layoutpublic" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/LayoutPublic')}>Home</Nav.Link>
          </Nav>
          <span className="navbar-text1">
              <Link to='/LayoutPublic'>
                <button className="vvd"><span>Home</span></button>
              </Link>
            </span>
          <span className="navbar-text1">
              <Link to='/Portfolio'>
                <button className="vvd"><span>Portfolio</span></button>
              </Link>
            </span>
          <span className="navbar-text1">
              <Link to='/startuplist'>
                <button className="vvd"><span>Invest Now</span></button>
              </Link>
            </span>
            <span className="navbar-text">
              <Link to='/Login'>
                <button className="vvd" ><span>Logout</span></button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

