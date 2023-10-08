const useStyles = (colorMode) => ({
  container: {
    marginTop: "140px",
    marginBottom: "140px",
  },
  imageWeb: {
    borderRadius: "50%",
    width: "100%",
  },
  imageMobile: {
    borderRadius: "50%",
    width: "60%",
  },
  imageContainer: {
    textAlign: "center",
  },
  spacing: {
    paddingTop: "20px",
  },
  logo: {
    height: "20px",
  },
  header: {
    fontWeight: "bold",
  },
  clearLink: {
    textDecoration: "none",
    color: "inherit",
  },
  navButton: {
    padding: "10.75px 15px",
    borderRadius: "3px",
    backgroundColor:
      colorMode === "dark" ? "rgb(144, 202, 249)" : "rgb(25, 118, 210)",
    color: colorMode === "dark" ? "rgba(0, 0, 0, 0.87)" : "white",
    "&:hover": {
      backgroundColor:
        colorMode === "dark" ? "rgb(66, 165, 245)" : "rgb(0, 86, 179)",
      color: colorMode === "dark" ? "rgb(0, 86, 179)" : "white",
    },
  },
});

export default useStyles;
