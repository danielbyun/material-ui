import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import LandingPage from "./ui/Pages/LandingPage/LandingPage";
import Header from "./ui/Pages/Header/Header";
import Footer from "./ui/Pages/Footer/Footer";

import Services from "./ui/Pages/Services/Services";
import StyledComponentTest from "./StyledComponentTest";
import CustomSoftware from "./ui/Pages/CusfomSoftware/CustomSoftware";
import MobileApps from "./ui/Pages/MobileApps/MobileApps";
import WebApps from "./ui/Pages/WebApps/WebApps";
import Revolution from "./ui/Pages/Revolution/Revolution";
import AboutUs from "./ui/Pages/AboutUs/AboutUs";
import ContactUs from "./ui/Pages/ContactUs/ContactUs";
import Estimate from "./ui/Pages/Estimate/Estimate";

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
          <Route
            exact
            path="/services"
            component={(props) => (
              <Services
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/hoctest" component={StyledComponentTest} />
          <Route
            exact
            path="/software"
            component={(props) => (
              <CustomSoftware
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobile"
            component={(props) => (
              <MobileApps
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/web"
            component={(props) => (
              <WebApps
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            component={(props) => (
              <Revolution {...props} setTabValue={setTabValue} />
            )}
          />
          <Route
            exact
            path="/about"
            component={(props) => (
              <AboutUs {...props} setTabValue={setTabValue} />
            )}
          />
          <Route
            exact
            path="/contact"
            component={(props) => (
              <ContactUs {...props} setTabValue={setTabValue} />
            )}
          />
          <Route
            exact
            path="/estimate"
            component={(props) => (
              <Estimate
                {...props}
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
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
