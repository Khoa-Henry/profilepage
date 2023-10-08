import React from "react";
import useStyles from "./styles";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import gitHub from "../../../Pics/github.png";
import gitHubDark from "../../../Pics/github-dark.png";

const ResumeInfoSection = (props) => {
  const { resumeInfo } = props;
  const theme = useTheme();
  const styles = useStyles(theme.palette.mode);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {resumeInfo.map((topic, index) => {
        const mainKey = `topic${index}`;

        return (
          <Grid container item key={mainKey}>
            <Grid
              item
              xs={12}
              md={4}
              key={mainKey}
              style={isMobile ? styles.spacing : {}}
            >
              <Typography variant="h6" width={topic.width} style={styles.topic}>
                {topic.topic}
              </Typography>
            </Grid>

            <Grid container item xs={12} md={8}>
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
                        style={{ fontSize: "20px" }}
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
            </Grid>

            {resumeInfo.length - 1 !== index ? (
              <Grid item xs={12}>
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
