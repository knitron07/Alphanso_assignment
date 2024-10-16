import { IconButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/system";

const IconStyles = {
  ".completed": {
    color: "#b2d9a3",
  },
  ".MuiSvgIcon-root": {
    color: "#dadada",
  },
  ":hover": {
    backgroundColor: "unset",
  },
};
export const CustomIconButton = styled(IconButton)(() => ({
  ...IconStyles,
}));
export const CustomListItemIcon = styled(ListItemIcon)(() => ({
  ...IconStyles,
}));
