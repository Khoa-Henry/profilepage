const useStyles = () => ({
  logoWebView: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".2rem",
  },
  logoMobileView: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
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
    display: { xs: "none", md: "inline-block" },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  menuButton: {
    display: { xs: "block", md: "none" },
  },
  linkClear: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default useStyles;
