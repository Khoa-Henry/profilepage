const useStyles = (colorMode) => ({
  topic: {
    borderBottom:
      colorMode === "dark"
        ? "4px solid #90caf9"
        : "4px solid rgb(25, 118, 210)",
  },
  accordionTitle: { fontWeight: "bold" },
  accordionSubTitle: {
    fontStyle: "italic",
    opacity: "0.6",
    fontWeight: "bold",
  },
  contentTitle: {
    fontWeight: "bold",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  contentSubTitle: {
    fontStyle: "italic",
    opacity: "0.6",
    fontWeight: "bold",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  description: {
    paddingLeft: "16px",
    marginTop: "12px",
  },
  bulletPoints: {
    marginBottom: "12px",
  },
  spacing: { paddingBottom: "32px" },
  divider: {
    border: "1.5px solid gray",
    marginTopTop: "16px",
    opacity: ".32",
    borderRadius: "2px",
  },
  logo: {
    height: "20px",
  },
  button: { fontSize: "20px", paddingLeft: "16px" },
});

export default useStyles;
