const useStyles = (isMobile, colorMode) => ({
  container: {
    paddingTop: "140px",
    paddingBottom: "140px",
  },
  divider: {
    border: "2px solid gray",
    marginBottom: "16px",
    borderRadius: "2px",
  },
  header: {
    fontWeight: "500",
  },
  topic: {
    fontSize: isMobile ? "20px" : "24px",
    borderBottom:
      colorMode === "dark"
        ? "4px solid #90caf9"
        : "4px solid rgb(25, 118, 210)",
  },
  link: {
    fontSize: isMobile ? "20px" : "24px",
    "&:hover": {
      color: "inherit",
    },
  },
  icon: { verticalAlign: "top" },
});

export default useStyles;
