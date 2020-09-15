import React, { Fragment } from "react";

import { SwipeableDrawer, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderList from "./HeaderList/HeaderList";
import Settings from "../Settings/Settings";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      // phones
      marginBottom: "1.25em",
    },
  },
}));

const HeaderDrawer = ({
  menuAnchorEl,
  handleMenuOpen,
  openDrawer,
  setOpenDrawer,
  tabValue,
  setTabValue,
  handleSettingClose,
  setDarkMode,
  darkMode,
  settingAnchorEl,
}) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <div className={classes.toolbarMargin}></div>
        <HeaderList
          menuAnchorEl={menuAnchorEl}
          handleMenuOpen={handleMenuOpen}
          tabValue={tabValue}
          setTabValue={setTabValue}
          setOpenDrawer={setOpenDrawer}
          handleSettingClose={handleSettingClose}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          settingAnchorEl={settingAnchorEl}
        />
      </SwipeableDrawer>
      <Settings
        handleSettingClose={handleSettingClose}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        settingAnchorEl={settingAnchorEl}
      />
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
};

export default HeaderDrawer;
