import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import photo from '../assets/img/profilephoto.jpg'
import linkedInIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon2.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import "../styles/NavBar.css";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // detect event and apply the effect on scrolling
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

  const onUpdateLinks = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='#home'>
          <img className='profile-photo' src={photo} alt={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateLinks("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateLinks("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateLinks("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/yixuan-guo-35372b1a9/'>
                <img src={linkedInIcon} alt=''/>
              </a>
              <a href='https://github.com/EasonGuo666'>
                <img src={githubIcon} alt='' />
              </a>
              <a href='https://www.instagram.com/guo_yixuan666/'>
                <img src={instagramIcon} alt='' />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
