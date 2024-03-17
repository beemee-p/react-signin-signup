const defaultStyle = {
  display: "block",
  padding: "5px 10px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "13px",
  lineHeight: "25px",
};

const type = {
  primary: {
    backgroundColor: "#1e79eb",
    color: "white",
    "&:hover": {
      color: "#0f4c81",
      backgroundColor: "#fff",
      border: "1px solid #1e79eb",
      opacity: 0.8,
    },
  },
  secondary: {
    color: "#1e79eb",
    backgroundColor: "#fff",
    border: "1.5px solid #1e79eb",
    "&:hover": { backgroundColor: "#1e79eb", color: "#fff", opacity: 0.8 },
  },
};

export const ButtonTheme = { defaultStyle, type };
