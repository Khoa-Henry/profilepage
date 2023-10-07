import React from "react";
import useStyles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutMe = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Grid container item xs={12}>
          <Grid container item xs={12} md={6}>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                EMAIL
              </Grid>
              <Grid item xs={8}>
                KNGUYEN@test.com
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>fewf</p>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
