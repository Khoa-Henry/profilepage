import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../App";
import { pageRoutes } from "../../app/pageRoutes";
import useStyles from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const { home, about, contact } = pageRoutes;

const navItems = [
  { label: "Home", route: home },
  { label: "About", route: about },
  { label: "Contact", route: contact },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const styles = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            {isMobile ? (
              <>
                <Grid item xs="auto">
                  <Link to={home} style={styles.clearLink}>
                    <Typography variant="h4" noWrap sx={styles.mobileLogo}>
                      KHN
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs="auto">
                  <IconButton
                    size="large"
                    aria-label="list of location of the web page to go"
                    aria-controls="menu-navBar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    {navItems.map((item, i) => {
                      const itemKey = `menuItem${i}`;
                      return (
                        <Link
                          onClick={handleCloseNavMenu}
                          key={itemKey}
                          to={item.route}
                          style={styles.clearLink}
                        >
                          <MenuItem>{item.label}</MenuItem>
                        </Link>
                      );
                    })}
                  </Menu>
                  <IconButton
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs="auto">
                  <Link to={home} style={styles.clearLink}>
                    <Typography variant="h5" noWrap sx={styles.webLogo}>
                      KHOA HENRY NGUYEN
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs></Grid>
                <Grid container alignItems="center" item xs="auto">
                  {navItems.map((item, i) => {
                    const linkButton = `linkButton${i}`;

                    return (
                      <Grid item key={linkButton}>
                        <Link
                          onClick={handleCloseNavMenu}
                          to={item.route}
                          style={styles.clearLink}
                        >
                          <Typography sx={styles.navButton}>
                            {item.label}
                          </Typography>
                        </Link>
                      </Grid>
                    );
                  })}
                  <Grid item>
                    <IconButton
                      onClick={colorMode.toggleColorMode}
                      color="inherit"
                    >
                      {theme.palette.mode === "dark" ? (
                        <Brightness7Icon />
                      ) : (
                        <Brightness4Icon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
