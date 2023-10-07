const useStyles = (colorMode) => ({
  topic: {
    borderBottom:
      colorMode === "dark"
        ? "4px solid #90caf9"
        : "4px solid rgb(25, 118, 210)",
  },
  contentTitle: {
    fontWeight: "bold",
  },
  contentSubTitle: {
    fontStyle: "italic",
    opacity: "0.6",
    fontWeight: "bold",
  },
  description: {
    paddingLeft: "20px",
    marginTop: "12px",
    marginBottom: "24px",
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
});

export default useStyles;
