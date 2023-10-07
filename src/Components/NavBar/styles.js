const useStyles = (colorMode) => ({
  clearLink: {
    textDecoration: "none",
    color: "inherit",
  },
  webLogo: {
    fontFamily: "Zen Tokyo Zoo",
    fontWeight: 700,
    letterSpacing: ".3rem",
    "&:hover": {
      textDecoration: "underline",
      color: colorMode === "dark" ? " #90caf9" : "inherit",
    },
  },
  navButton: {
    textDecoration: "none",
    color: "inherit",
    padding: "10px 20px",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      color: colorMode === "dark" ? " #90caf9" : "inherit",
    },
  },
  currentLocationWeb: {
    borderBottom:
      colorMode === "light" ? "2px solid white" : "2px solid #90caf9",
  },
  currentLocationMobile: {
    borderBottom:
      colorMode === "light" ? "2px solid #1976d2" : "2px solid #90caf9",
  },
  mobileLogo: {
    fontFamily: "Zen Tokyo Zoo",
    fontWeight: 700,
    letterSpacing: ".3rem",
    "&:hover": {
      textDecoration: "underline",
      color: colorMode === "dark" ? " #90caf9" : "inherit",
    },
  },
});

export default useStyles;
