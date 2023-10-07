const useStyles = () => ({
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
  linkClear: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default useStyles;
