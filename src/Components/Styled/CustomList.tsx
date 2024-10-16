import { List } from "@mui/material";
import { styled } from "@mui/system";

export const CustomList = styled(List)({
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  ".MuiListItem-root": {
    gap: "8px",
    height: "100%",
    width: "100%",
  },
  ".MuiListItemIcon-root": {
    minWidth: "unset",
    ".completed": {
      color: "#b2d9a3",
    },
  },
});
