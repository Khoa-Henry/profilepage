import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ColorModeContext } from "../../App";
import { pageRoutes } from "../../app/pageRoutes";
import useStyles from "./styles";
import AnimatedCursor from "react-animated-cursor";

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
  const { pathname } = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const styles = useStyles(theme.palette.mode);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <AnimatedCursor
        innerSize={5}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        showSystemCursor
        outerStyle={{
          border: `1px solid ${
            theme.palette.mode === "light" ? "#90caf9" : "#ffffff"
          }`,
        }}
        innerStyle={{
          backgroundColor: `${
            theme.palette.mode === "light" ? "#90caf9" : "#ffffff"
          }`,
        }}
        trailingSpeed={4}
      />
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

                  <Drawer
                    anchor="right"
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    <AnimatedCursor
                      innerSize={5}
                      outerSize={35}
                      innerScale={1}
                      outerScale={1.7}
                      outerAlpha={0}
                      showSystemCursor
                      outerStyle={{
                        border: `1px solid ${
                          theme.palette.mode === "light" ? "#90caf9" : "#ffffff"
                        }`,
                      }}
                      innerStyle={{
                        backgroundColor: `${
                          theme.palette.mode === "light" ? "#90caf9" : "#ffffff"
                        }`,
                      }}
                      trailingSpeed={4}
                    />
                    <Box
                      sx={{
                        width: 250,
                      }}
                      role="presentation"
                    >
                      <List>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <IconButton
                              size="large"
                              aria-label="the cancel button get out of the navbar view"
                              aria-controls="navbar-close"
                              aria-haspopup="true"
                              onClick={handleCloseNavMenu}
                              color="inherit"
                            >
                              <CloseIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                        {navItems.map((item, i) => {
                          const itemKey = `menuItem${i}`;
                          const isCurrentPage = pathname === item.route;

                          return (
                            <Link
                              to={item.route}
                              style={styles.clearLink}
                              key={itemKey}
                              onClick={handleCloseNavMenu}
                            >
                              <Typography
                                sx={
                                  isCurrentPage
                                    ? {
                                        ...styles.navButton,
                                        ...styles.currentLocationMobile,
                                      }
                                    : styles.navButton
                                }
                              >
                                {item.label}
                              </Typography>
                            </Link>
                          );
                        })}
                      </List>
                    </Box>
                  </Drawer>

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
                    const isCurrentPage = pathname === item.route;

                    return (
                      <Grid item key={linkButton}>
                        <Link
                          onClick={handleCloseNavMenu}
                          to={item.route}
                          style={styles.clearLink}
                        >
                          <Typography
                            sx={
                              isCurrentPage
                                ? {
                                    ...styles.navButton,
                                    ...styles.currentLocationWeb,
                                  }
                                : styles.navButton
                            }
                          >
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
