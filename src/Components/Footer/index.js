import useStyles from "./styles";

export default function Footer() {
  const styles = useStyles();

  return (
    <footer
      id="footer"
      className="w-100 bg-light text-center"
      style={styles.footer}
    >
      ©2023 Khoa Henry Nguyen | Yep
    </footer>
  );
}
