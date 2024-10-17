import { styled } from "@mui/material";

export const AppBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  "@media (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const FilterButtonWrapper = styled("div")({
  gap: "8px",
  display: "flex",
});
