import { useContext, useEffect, useState } from "react";
import TodoTaskList from "./TodoTaskList/TodoTaskList";
import { TaskContex } from "./Utility/TaskContext";
import AppBar, { Filter } from "./AppBar/AppBar";
import { TaskObject } from "./TodoTaskList/Task.type";

function Home() {
  const { taskList, setTaskList } = useContext(TaskContex);
  const [finalTaskList, setFinaltaskList] = useState([...taskList]);
  const filterTask = (filter: Filter) => {
    const allTaskList = [...taskList];
    const buttonFilteredTask = allTaskList.filter((task: TaskObject) =>
      filter.buttonFilter === "All"
        ? true
        : filter.buttonFilter === "Completed"
        ? task.isCompleted === true
        : filter.buttonFilter === "Incomplete"
        ? task.isCompleted === false
        : false
    );

    const queryfilteredTask = buttonFilteredTask.filter((task: TaskObject) =>
      task.text.toLowerCase().includes(filter.search.toLowerCase())
    );
    setFinaltaskList(queryfilteredTask);
  };
  useEffect(() => {
    setFinaltaskList(taskList);
  }, [taskList]);
  return (
    <>
      <AppBar tiggerFilter={filterTask} />
      <TodoTaskList taskList={finalTaskList} />
    </>
  );
}

export default Home;
