const useStyles = () => ({
  clearLink: {
    textDecoration: "none",
    color: "inherit",
  },
  webLogo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  navButton: {
    textDecoration: "none",
    color: "inherit",
    padding: "6px 12px",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  mobileLogo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default useStyles;
