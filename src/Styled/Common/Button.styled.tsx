import { styled } from "@mui/material";
import Button from "../../Components/Common/Button";

export const StyledButton = styled(Button)({
  alignItems: "center",
  textAlign: "center",
  padding: "4px 10px",
  border: "none",
  height: "100%",
  color: "#ffffff",
  borderRadius: "4px",
  "&.primary": {
    backgroundColor: "#54ac34",
  },
  "&.secondary": {
    backgroundColor: "#ababab",
  },
  "&.tertiary": {
    backgroundColor: "#000000",
  },
  "&.add-task": {
    height: "44px",
  },
});
