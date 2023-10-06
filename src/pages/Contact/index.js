import React from "react";
import useStyles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AboutMe = () => {
  const styles = useStyles();

  return (
    <Container style={styles.container}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1" style={styles.header}>
            CONTACT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.divider}></div>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <p>fewf</p>
          </Grid>
          <Grid item xs={6}>
            <p>fewf</p>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
