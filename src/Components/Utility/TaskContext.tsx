import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { TaskObject } from "../TodoTaskList/Task.type";

type TaskContextType = {
  taskList: TaskObject[];
  setTaskList: Dispatch<SetStateAction<TaskObject[]>>;
};
type TaskContextProps = {
  children: React.ReactNode;
};

export const TaskContex = createContext<TaskContextType>({} as TaskContextType);

function TaskContextProvider({ children }: TaskContextProps) {
  const taskList: TaskObject[] =
    (JSON.parse(localStorage.getItem("taskList") || "[]") as TaskObject[]) ||
    [];
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
