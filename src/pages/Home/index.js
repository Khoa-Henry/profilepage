import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO";
import gitHubDark from "../../Pics/github-dark.png";
import gitHub from "../../Pics/github.png";
import linkedinDark from "../../Pics/linkedin-dark.png";
import linkedin from "../../Pics/linkendin.png";
import Me from "../../Pics/me.jpg";
import { pageRoutes } from "../../app/pageRoutes";
import useStyles from "./styles";
import "./styles.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const styles = useStyles(theme.palette.mode);

  return (
    <Container>
      <SEO
        title="KHN: Get To Know About Me"
        description="Explore the world of Khoa Henry Nguyen through his personal website. Discover his journey, interests, and passions. Join him on his adventures and insights."
        keyWords="Khoa Henry Nguyen, Application Development Engineer, American Family Insurance, Experienced Front-end Developer, Robust skill set, Application development, Web design, Cloud computing, IT support, Front-end/React developer"
      />

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
              className={
                theme.palette.mode === "light" ? "img avatar" : "img avatarDark"
              }
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
              Senior Engineer at American Family Insurance
            </Typography>
            <Typography variant="h6" style={styles.spacing}>
              Experienced Front-end Developer with a robust skill set
              encompassing application development, web design, cloud computing,
              and IT support. Recognized for a meticulous attention to detail,
              self-driven initiative, and unwavering reliability, I consistently
              deliver as a dedicated and industrious front-end/React developer.
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
            style={styles.spacing}
          >
            <Grid item xs="auto">
              <Link to={pageRoutes.about} style={styles.clearLink}>
                <Typography variant="button" sx={styles.navButton}>
                  Learn More About Me
                </Typography>
              </Link>
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
