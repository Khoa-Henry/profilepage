import blueDoodle from "../../Pics/blueDoodle.jpg";

const useStyles = () => ({
  container: {
    paddingTop: "140px",
    paddingBottom: "140px",
  },
  divider: {
    border: "2px solid gray",
    marginBottom: "16px",
    borderRadius: "2px",
  },
  resume: {
    paddingTop: "150px",
  },
  content: {
    background: "white",
    borderRadius: "10px",
    padding: "16px",
  },
  spacing: {
    paddingTop: "32px",
  },
  header: {
    fontWeight: "700",
  },
  background: {
    backgroundImage: `url("${blueDoodle}")`,
    height: "100%",
    width: "auto",
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default useStyles;
