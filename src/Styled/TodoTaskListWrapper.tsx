import { styled } from "@mui/material";

export const TodoTaskListWrapper = styled("div")({
  height: "538px",
  width: "100%",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const AddTaskWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "sticky",
  bottom: "0px",
  backgroundColor: "#ffffff",
  paddingTop: "8px",
});
