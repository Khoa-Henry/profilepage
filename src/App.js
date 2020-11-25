// import logo from './logo.svg';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import './App.css';
// import {Container} from 'reactstrap';
// import {Navbar,Nav} from 'react-bootstrap';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <Router >
      <NavBar/>
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
      <Footer/>
    </Router>
  );
}

export default App;
