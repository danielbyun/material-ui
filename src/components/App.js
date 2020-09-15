import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";
import LandingPage from "./ui/LandingPage/LandingPage";

const ARC_BLUE = "#0B72B9";
const ARC_ORANGE = "#FFBA60";
const ARC_GREY = "#868686";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      darkMode
    ) {
      setDarkMode(true);
    }
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          common: {
            blue: ARC_BLUE,
            orange: ARC_ORANGE,
            white: "white",
          },
          primary: {
            main: ARC_BLUE,
          },
          secondary: {
            main: ARC_ORANGE,
          },
          type: darkMode ? "dark" : "light",
        },
        typography: {
          tab: {
            fontFamily: "raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
          },
          estimate: {
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
          },
          h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: ARC_BLUE,
            lineHeight: 1.5,
          },
          h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: ARC_BLUE,
          },
          h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: ARC_BLUE,
            fontWeight: 700,
          },
          subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: ARC_GREY,
          },
          subtitle2: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: "white",
          },
          learnButton: {
            borderColor: ARC_BLUE,
            color: !darkMode ? ARC_BLUE : "white",
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
          menuText: {
            padding: "0 1rem",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/software"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobile"
            component={() => <div>Mobile Apps</div>}
          />
          <Route
            exact
            path="/web"
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
        </Switch>
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
