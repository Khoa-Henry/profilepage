import React from "react";
import useStyles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ResumeInfoSection from "./ResumeInfoSection";
import { resumeInfo } from "./constants";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const AboutMe = () => {
  const styles = useStyles();

  return (
    // <div style={styles.background}>
    <Container style={styles.container}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        // style={styles.content}
      >
        <Grid item xs={12}>
          <Typography variant="h1" style={styles.header}>
            ABOUT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.divider}></div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Hey, my name is Khoa Henry Nguyen and I go by Henry. I am a
            dedicated software engineer with a knack for problem-solving and a
            extensive experience in web development. I'm proficient in various
            programming languages, always eager to learn, and excel in
            collaborative environments. I prioritize clean code and
            user-friendly design.
          </Typography>
        </Grid>

        <Grid item xs={12} style={styles.spacing}>
          <Button
            href="resume.pdf"
            download="Khoa Henry Nguyen's resume.pdf"
            variant="text"
            startIcon={<DownloadIcon color="primary" />}
          >
            <Typography variant="subtitle1">Download My Resume</Typography>
          </Button>
        </Grid>

        <Grid container spacing={4} item xs={12} style={styles.resume}>
          <ResumeInfoSection resumeInfo={resumeInfo} />
        </Grid>
      </Grid>
    </Container>
    // </div>
  );
};

export default AboutMe;
