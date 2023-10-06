const useStyles = () => ({
  logoWebView: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
  },
  logoMobileView: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  webNav: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  filterBox: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  buttonNav: {
    my: 2,
    color: "white",
    display: { xs: "none", md: "inline-block" },
  },
  menuButton: {
    display: { xs: "block", md: "none" },
  },
});

export default useStyles;
