// import logo from './logo.svg';
import React from 'react'
// import './App.css';
// import {Container} from 'reactstrap';
import {Navbar,Nav} from 'react-bootstrap';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router >
        <Navbar fixed="top"  expand="sm" variant="dark" style={{paddingLeft: '60px', paddingRight:'60px',fontFamily: "Times New Roman", fontSize:'20px'}}>
        <Navbar.Brand href="/" className="mr-auto">Khoa Nguyen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about" >About</Nav.Link>
              <Nav.Link href="/contact" >Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar fixed="bottom" expand="sm" variant="dark" style={{paddingLeft:'60px', fontFamily: "Times New Roman", fontSize:"18px"}}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/khoa-henry-nguyen/" target="_blank">Linkedin</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/profile.php?id=100006259270216" target="_blank">Facebook</Nav.Link>
                    <Nav.Link href="https://www.instagram.com/henry1_0/" target="_blank">Instagram</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
