import React, { useContext, useRef, useState } from "react";
import { TaskObject, TodoTaskListProps } from "./Task.type";
import TodoList from "./TodoList";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { TaskContex } from "../Utility/TaskContext";

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
        const newtask: TaskObject = {
          id: taskList.length + 1,
          text: inputValue,
          isCompleted: false,
        };
        return [...taskList, newtask];
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };
  const handleAddtask = (e: React.MouseEvent<HTMLButtonElement>) => {
    addTask();
  };
  return (
    <>
      <TodoList taskList={taskList} />
      <Input
        id={"todo-input-element"}
        placeHolder="Type something"
        inputRef={inputRef}
        onChange={onChangeTodoInput}
        onKeyDown={handleKeyDown}
      />
      <Button label="Add task" onClick={handleAddtask} />
    </>
  );
}

export default TodoTaskList;
