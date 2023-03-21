import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '.../assets/img/LCFlogo2.png';
import { Link } from "react-router-dom";

export const Navs = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    {/* <img src={logo} alt="Logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
              <Nav.Link href="#layoutpublic" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/LayoutPublic')}></Nav.Link>
                  </Nav>
                    <span className="navbar-text1">
                        <Link to='/LayoutStartup'>
                            <button className="vvd"><span>Home</span></button>
                        </Link>
                    </span>
                    <span className="navbar-text1">
                        <Link to='/Domain'>
                            <button className="vvd"><span>Domain</span></button>
                        </Link>
                    </span>
                    <span className="navbar-text1">
                        <Link to='/InvestorPortfolio'>
                            <button className="vvd"><span>Portfolio</span></button>
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
    );
}

export default Navs;

