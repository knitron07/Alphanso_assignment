import styled from "styled-components";
import Input from "../../Components/Common/Input";

export const StyledInput = styled(Input)({
  gap: "8px",
  display: "flex",
  padding: "4px 8px",
  border: "none",
  height: "calc(100% - 8px)",
  width: "calc(100% - 16px)",
  borderRadius: "inherit",
  "&:focus": {
    outline: "none",
    border: "none",
  },
});
