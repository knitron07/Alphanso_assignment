import React, { useContext, useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  CustomListItem,
  OutlineCardWrapper,
} from "../../Styled/CustomListItem";
import { CustomIconButton, CustomListItemIcon } from "../../Styled/IconStyles";
import { TaskContex } from "../Utility/TaskContext";
import { TaskObject } from "./Task.type";

type TodoCardProps = {
  id: number;
  isCompleted?: boolean;
  todoText: string;
};
function TodoCard({ id, isCompleted = false, todoText }: TodoCardProps) {
  const { setTaskList } = useContext(TaskContex);
  const [completed, setCompleted] = useState(isCompleted);
  const handleOnClickTask = () => {
    const currentStatus = completed;
    setCompleted(!currentStatus);
    setTaskList((prev: TaskObject[]) => {
      const currentList = prev;
      const modifiedList = currentList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !currentStatus };
        }
        return task;
      });
      return modifiedList;
    });
  };
  const handleOnClickCross = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setTaskList((prev: TaskObject[]) => {
      const currentList = prev;
      const modifiedList = currentList.filter((task) => task.id !== id);
      return modifiedList;
    });
  };
  return (
    <OutlineCardWrapper outlined isCompleted={completed}>
      <CustomListItem
        onClick={handleOnClickTask}
        secondaryAction={
          <CustomIconButton
            onClick={handleOnClickCross}
            edge="start"
            aria-label="delete"
          >
            <CloseOutlinedIcon fontSize="small" />
          </CustomIconButton>
        }
      >
        <CustomListItemIcon>
          {completed ? (
            <CheckCircleOutlinedIcon className="completed" fontSize="small" />
          ) : (
            <CircleOutlinedIcon fontSize="small" />
          )}
        </CustomListItemIcon>
        {todoText}
      </CustomListItem>
    </OutlineCardWrapper>
  );
}

export default TodoCard;
