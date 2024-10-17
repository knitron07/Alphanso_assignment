import { ListItem } from "@mui/material";
import { styled } from "@mui/system";
type CustomListItemProps = {
  outlined?: boolean;
  isCompleted: true | false;
};

export const CustomListItem = styled(ListItem)({
  "&.isChecked": {},
});

export const OutlineCardWrapper = styled("div")<CustomListItemProps>(
  ({ outlined = false, isCompleted }) => ({
    ...(outlined && {
      border: `solid 1px ${isCompleted ? "#b2d9a3" : "#dadada"} `,
      backgroundColor: `${isCompleted ? "#e8f3e1" : "#ffffff"}`,
      borderRadius: "6px",
      height: "44px",
      width: "calc(100% - 2px)",
      ":hover": {
        backgroundColor: "#e8f3e1",
      },
    }),
  })
);
