import { CustomList } from "../../Styled/CustomList";
import { TodoTaskListProps } from "./Task.type";
import TodoCard from "./TodoCard";

function TodoList({ taskList }: TodoTaskListProps) {
  return (
    <CustomList>
      {taskList.map((singletask) => {
        return (
          <TodoCard
            key={singletask.id}
            id={singletask.id}
            todoText={singletask.text}
            isCompleted={singletask.isCompleted}
          />
        );
      })}
    </CustomList>
  );
}

export default TodoList;
