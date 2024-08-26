import { styled } from "@mui/material/styles";

const NavigateLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
  fontSize: "0.775rem",
  width: "100%",
  padding: "0 0.5rem",
  "& span": {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    '&:last-child': {
      textAlign: "right",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export { NavigateLinks };
