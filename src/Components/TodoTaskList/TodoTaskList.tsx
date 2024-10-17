import React, { useContext, useRef, useState } from "react";
import { TaskObject, TodoTaskListProps } from "./Task.type";
import TodoList from "./TodoList";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { TaskContex } from "../Utility/TaskContext";
import {
  AddTaskWrapper,
  TodoTaskListWrapper,
} from "../../Styled/TodoTaskListWrapper";
import { StyledInput } from "../../Styled/Common/Input.styled";
import { OutlineCardWrapper } from "../../Styled/CustomListItem";
import { StyledButton } from "../../Styled/Common/Button.styled";

function TodoTaskList({ taskList }: TodoTaskListProps) {
  const { setTaskList } = useContext(TaskContex);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const addTask = () => {
    const inputValue = (inputRef.current as HTMLInputElement).value;
    (inputRef.current as HTMLInputElement).value = "";
    if (inputValue.length) {
      setTaskList((prev: TaskObject[]) => {
        const taskList = prev;
        const randomId = Math.floor(Math.random() * 10000000 + 1);
        const newtask: TaskObject = {
          id: randomId,
          text: inputValue,
          isCompleted: false,
        };
        return [newtask, ...taskList];
      });
    }else{
      window.alert("Empty task can't be added to the list.")
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };
  const handleAddtask = (e: React.MouseEvent<HTMLButtonElement>) => {
    addTask();
  };
  return (
    <TodoTaskListWrapper>
      <TodoList taskList={taskList} />
      <AddTaskWrapper>
        <OutlineCardWrapper outlined isCompleted={false}>
          <StyledInput
            id={"todo-input-element"}
            placeHolder="Type something"
            inputRef={inputRef}
            onChange={onChangeTodoInput}
            onKeyDown={handleKeyDown}
          />
        </OutlineCardWrapper>
        <StyledButton
          className="tertiary add-task"
          label="Add task"
          onClick={handleAddtask}
        />
      </AddTaskWrapper>
    </TodoTaskListWrapper>
  );
}

export default TodoTaskList;
