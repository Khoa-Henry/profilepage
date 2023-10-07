import React from "react";
import useStyles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "@mui/material/Link";

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = useStyles(isMobile, theme.palette.mode);

  return (
    <Container style={styles.container}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            component="h1"
            style={styles.header}
          >
            CONTACT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.divider}></div>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item md={2} sm={4} xs={12}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  width={isMobile ? 65 : 75}
                  sx={styles.topic}
                >
                  EMAIL
                </Typography>
              </Grid>
              <Grid item md={10} sm={8} xs={12}>
                <Link
                  href="mailto:knguyen041802@gmail.com"
                  color="inherit"
                  underline="hover"
                  sx={styles.link}
                >
                  <ArrowOutwardIcon
                    color="primary"
                    fontSize={isMobile ? "medium" : "large"}
                    sx={styles.icon}
                  />
                  knguyen041802@gmail.com
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={5}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  width={isMobile ? 146 : 172}
                  sx={styles.topic}
                >
                  SOCIAL MEDIA
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={7}>
                <Link
                  href="https://www.instagram.com/henry1_02/"
                  color="inherit"
                  underline="hover"
                  sx={styles.link}
                >
                  <ArrowOutwardIcon
                    color="primary"
                    fontSize={isMobile ? "medium" : "large"}
                    sx={styles.icon}
                  />
                  Instagram
                </Link>
              </Grid>
              <Grid item xs={12} sm={4} md={5}></Grid>
              <Grid item xs={12} sm={8} md={7}>
                <Link
                  href="https://www.linkedin.com/in/khoahenrynguyen/"
                  color="inherit"
                  underline="hover"
                  sx={styles.link}
                >
                  <ArrowOutwardIcon
                    color="primary"
                    fontSize={isMobile ? "medium" : "large"}
                    sx={styles.icon}
                  />
                  Linkedin
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
