const useStyles = () => ({
  container: {
    marginTop: "140px",
    marginBottom: "140px",
  },
  imageWeb: {
    borderRadius: "50%",
    boxShadow: " 5px 5px 6px 5px #ccc",
  },
  imageMobile: {
    borderRadius: "50%",
    width: "60%",
    boxShadow: " 5px 5px 6px 5px #ccc",
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
