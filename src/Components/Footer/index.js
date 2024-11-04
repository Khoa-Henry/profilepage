import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useStyles from "./styles";

export default function Footer() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer id="footer">
      <AppBar style={styles.footer} position="static" color="inherit">
        ©{isMobile ? "KHN" : "Khoa Henry Nguyen"} | {new Date().getFullYear()}
      </AppBar>
    </footer>
  );
}
