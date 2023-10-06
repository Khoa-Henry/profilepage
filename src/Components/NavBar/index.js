import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { pageRoutes } from "../../app/pageRoutes";
import useStyles from "./styles";

const { home, about, contact } = pageRoutes;

const navItems = [
  { label: "Home", route: home },
  { label: "About Me", route: about },
  // { label: "Contact", route: contact },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const styles = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={home}
            sx={styles.logoWebView}
          >
            KHOA HENRY NGUYEN
          </Typography>

          <Box sx={styles.webNav}>
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
              id="menu-navBar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menuButton}
            >
              {navItems.map((item, i) => {
                const itemKey = `menuItem${i}`;
                return (
                  <MenuItem onClick={handleCloseNavMenu} key={itemKey}>
                    <Typography
                      textAlign="center"
                      noWrap
                      component="a"
                      style={{ textDecoration: "none" }}
                      href={item.route}
                    >
                      {item.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href={home}
            sx={styles.logoMobileView}
          >
            KHN
          </Typography>
          <Box sx={styles.filterBox}></Box>

          <Box sx={{ flexGrow: 0 }}>
            {navItems.map((item, i) => {
              const buttonKey = `buttonItem${i}`;

              return (
                <Button
                  key={buttonKey}
                  href={item.route}
                  onClick={handleCloseNavMenu}
                  sx={styles.buttonNav}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
