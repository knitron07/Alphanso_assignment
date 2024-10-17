import { styled } from "@mui/material";

export const SearchBarWrapper = styled("div")({
  border: `solid 1px  #dadada`,
  backgroundColor: `#ffffff`,
  borderRadius: "17px",
  height: "34px",
  width: "calc(50% - 15px)",
  minWidth: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "15px",
  ".search-icon-container": {
    alignItems: "center",
    display: "flex",
    ".MuiSvgIcon-root": {
      color: "#dadada",
    },
  },
  "@media (max-width: 700px)": {
    width: "calc(100% - 15px)",
  },
});
