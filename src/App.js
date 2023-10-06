import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { pageRoutes } from "./app/pageRoutes";

const { home, about } = pageRoutes;

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={home}>
          <Home />
        </Route>

        <Route path={about}>
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
