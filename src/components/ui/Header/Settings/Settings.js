import React from "react";
import {
  Typography,
  Divider,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  makeStyles,
  Menu,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  settingsText: {
    ...theme.typography.menuText,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "white",
  },
}));

const Settings = ({
  settingAnchorEl,
  handleSettingClose,
  darkMode,
  setDarkMode,
}) => {
  const classes = useStyles();

  return (
    <Menu
      anchorEl={settingAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(settingAnchorEl)}
      onClose={handleSettingClose}
      MenuListProps={{ onMouseLeave: handleSettingClose }}
      classes={{ paper: classes.menu }}
      style={{ zIndex: 1302 }}
      keepMounted
    >
      <Typography variant="h5" className={classes.settingsText} gutterBottom>
        Settings
      </Typography>
      <Divider />
      <MenuItem classes={{ root: classes.menuItem }}>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              label={darkMode ? "Dark Mode" : "Light Mode"}
              control={
                <Switch
                  name="view mode"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </MenuItem>
    </Menu>
  );
};

export default Settings;
