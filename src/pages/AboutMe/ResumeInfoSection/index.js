import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import gitHubDark from "../../../Pics/github-dark.png";
import gitHub from "../../../Pics/github.png";
import { resumeInfo } from "./constants";
import useStyles from "./styles";

const ResumeInfoSection = () => {
  const theme = useTheme();
  const styles = useStyles(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {resumeInfo.map((topic, index) => {
        const mainKey = `topic${index}`;

        return (
          <Grid container item key={mainKey}>
            <Grid
              item
              xs={12}
              md={3}
              key={mainKey}
              style={isMobile ? styles.spacing : {}}
            >
              <Typography variant="h6" width={topic.width} style={styles.topic}>
                {topic.topic}
              </Typography>
            </Grid>

            <Grid item xs={12} md={9}>
              {topic.topic === "EXPERIENCE" ? (
                <>
                  {topic.data.map((e, i) => {
                    return (
                      <Accordion
                        expanded={expanded === `panel${i}`}
                        onChange={handleChange(`panel${i}`)}
                        key={i}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${i}bh-content`}
                          id={`panel${i}bh-header`}
                        >
                          <Grid container>
                            <Grid item xs={12}>
                              <Typography
                                variant="h5"
                                style={styles.accordionTitle}
                              >
                                {e.companyName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography
                                variant="h6"
                                style={styles.accordionSubTitle}
                              >
                                {e.subTitle}
                              </Typography>
                            </Grid>
                          </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div style={styles.description}>
                            {e.info.map((item, i) => {
                              return (
                                <Typography
                                  key={i}
                                  variant="body1"
                                  style={styles.bulletPoints}
                                >
                                  {item}
                                </Typography>
                              );
                            })}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </>
              ) : (
                <>
                  {topic.data.map((e, i) => {
                    const dataKey = `data${i}`;
                    return (
                      <div key={dataKey}>
                        <Typography variant="h5" style={styles.contentTitle}>
                          {e.companyName}
                        </Typography>
                        <Typography variant="h6" style={styles.contentSubTitle}>
                          {e.subTitle}
                        </Typography>
                        {topic.topic === "PROJECTS" && (
                          <Button
                            variant="text"
                            href="https://github.com/Khoa-Henry"
                            target="blank"
                            style={styles.button}
                            startIcon={
                              <img
                                src={
                                  theme.palette.mode === "light"
                                    ? gitHub
                                    : gitHubDark
                                }
                                style={styles.logo}
                                alt="the github logo"
                              />
                            }
                          >
                            Github
                          </Button>
                        )}
                        <div style={styles.description}>
                          {e.info.map((item, i) => {
                            return (
                              <Typography
                                key={i}
                                variant="body1"
                                style={styles.bulletPoints}
                              >
                                {item}
                              </Typography>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </Grid>

            {resumeInfo.length - 1 !== index ? (
              <Grid
                item
                xs={12}
                style={
                  topic.topic === "EXPERIENCE" ? { paddingTop: "12px" } : {}
                }
              >
                <div style={styles.divider}></div>
              </Grid>
            ) : null}
          </Grid>
        );
      })}
    </>
  );
};

export default ResumeInfoSection;
