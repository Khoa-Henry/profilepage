import React from "react";
import useStyles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Me from "../../Pics/me.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import gitHub from "../../Pics/github.png";
import gitHubDark from "../../Pics/github-dark.png";
import linkedin from "../../Pics/linkendin.png";
import linkedinDark from "../../Pics/linkedin-dark.png";
import { pageRoutes } from "../../app/pageRoutes";
import { Link } from "react-router-dom";

const Home = () => {
  const styles = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Grid
        style={styles.container}
        container
        spacing={2}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={4} style={styles.imageContainer}>
          <figure>
            <img
              src={Me}
              style={isMobile ? styles.imageMobile : styles.imageWeb}
              className="img-fluid img"
              alt="henry's profile headshot"
            />
          </figure>
        </Grid>
        <Grid item xs={12} md={8}>
          <header>
            <Typography variant="h1" style={styles.header}>
              Khoa Henry Nguyen
            </Typography>
            <Typography variant="h4" color="primary">
              Application Development Engineer at American Family Insurance
            </Typography>
            <Typography variant="body1" style={styles.spacing}>
              Experienced Front-end Developer with a robust skill set
              encompassing application development, web design, cloud computing,
              and IT support. Recognized for a meticulous attention to detail,
              self-driven initiative, and unwavering reliability, I consistently
              deliver as a dedicated and industrious front-end/React developer.
            </Typography>
          </header>
          <Grid container direction="row" spacing={2} style={styles.spacing}>
            <Grid item xs="auto">
              <Button variant="contained">
                <Link to={pageRoutes.about} style={styles.linkClear}>
                  Learn More About Me
                </Link>
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/khoahenrynguyen/"
                target="blank"
                startIcon={
                  <img
                    src={
                      theme.palette.mode === "light" ? linkedin : linkedinDark
                    }
                    style={styles.logo}
                    alt="the linkedin logo"
                  />
                }
              >
                Linkedin
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                href="https://github.com/Khoa-Henry"
                target="blank"
                startIcon={
                  <img
                    src={theme.palette.mode === "light" ? gitHub : gitHubDark}
                    style={styles.logo}
                    alt="the github logo"
                  />
                }
              >
                Github
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
