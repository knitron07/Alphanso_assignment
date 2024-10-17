import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { TaskObject } from "../TodoTaskList/Task.type";
import { defalutTaskList } from "./Constant";

type TaskContextType = {
  taskList: TaskObject[];
  setTaskList: Dispatch<SetStateAction<TaskObject[]>>;
};
type TaskContextProps = {
  children: React.ReactNode;
};

export const TaskContex = createContext<TaskContextType>({} as TaskContextType);

function TaskContextProvider({ children }: TaskContextProps) {
  let taskList: TaskObject[] = JSON.parse(
    localStorage.getItem("taskList") || "[]"
  ) as TaskObject[];
  taskList = taskList.length ? taskList : defalutTaskList;
  const [tList, setTList] = useState<TaskObject[]>(taskList);
  const storeTaskListInLocalStorage = () => {
    console.log(tList);
    localStorage.setItem("taskList", JSON.stringify(tList));
  };
  useEffect(() => {
    window.addEventListener("beforeunload", storeTaskListInLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", storeTaskListInLocalStorage);
    };
  }, [tList]);
  return (
    <TaskContex.Provider
      value={{
        taskList: tList,
        setTaskList: setTList,
      }}
    >
      {children}
    </TaskContex.Provider>
  );
}

export default TaskContextProvider;
