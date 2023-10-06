import useStyles from "./styles";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  const styles = useStyles();

  return (
    <footer id="footer">
      <AppBar style={styles.footer} position="static">
        ©2023 Khoa Henry Nguyen | Yep
      </AppBar>
    </footer>
  );
}
