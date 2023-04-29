import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileInfo: {
    display: "flex",
    alignItems: "center"
  },
  profilePic: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1)
  },
  profileName: {
    fontWeight: "bold"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.profileInfo}>
          <Avatar
            alt="Profile Picture"
            src="https://example.com/profile-pic.jpg"
            className={classes.profilePic}
          />
          <Typography variant="h6" className={classes.profileName}>
            Kalpanath Majhi
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
