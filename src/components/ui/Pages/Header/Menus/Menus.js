import React from "react";
import {
  makeStyles,
  // Typography,
  // Divider,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  settingsText: {
    ...theme.typography.menuText,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    color: "white",
  },
}));

const Menus = ({
  menuOptions,
  handleMenuClose,
  handleMenuItemClick,
  menuAnchorEl,
  tabValue,
  setTabValue,
  selectedIndex,
}) => {
  const classes = useStyles();

  return (
    <Menu
      anchorEl={menuAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menuAnchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{ onMouseLeave: handleMenuClose }}
      classes={{ paper: classes.menu }}
      style={{ zIndex: 1302 }}
      keepMounted
    >
      {menuOptions.map((option, index) => (
        <MenuItem
          key={index}
          component={Link}
          onClick={(e) => {
            handleMenuItemClick(e, index);
            setTabValue(1);
          }}
          to={option.link}
          classes={{ root: classes.menuItem }}
          selected={index === selectedIndex && tabValue === 1}
        >
          {option.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Menus;
