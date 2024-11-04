import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { pageRoutes } from "./app/pageRoutes";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

import Home from "./pages/Home";

const { home, about, contact } = pageRoutes;

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          allVariants: {
            fontFamily: "Faustina, serif",
            // fontFamily: "Zen Tokyo Zoo",
            textTransform: "none",
          },
        },
      }),
    [mode]
  );

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* <AnimatedCursor
            innerSize={5}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            showSystemCursor
            outerStyle={{
              border: `1px solid ${mode === "light" ? "#90caf9" : "#ffffff"}`,
            }}
            innerStyle={{
              backgroundColor: `${mode === "light" ? "#90caf9" : "#ffffff"}`,
            }}
            trailingSpeed={4}
          /> */}
          <CssBaseline />
          <Router>
            <NavBar />
            <Switch>
              <Route exact path={home}>
                <Home />
              </Route>

              <Route path={about}>
                <AboutMe />
              </Route>

              <Route path={contact}>
                <Contact />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
