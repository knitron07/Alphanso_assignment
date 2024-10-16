export type TaskObject = {
  id: number;
  text: string;
  isCompleted: true | false;
};
export type TodoTaskListProps = {
  taskList: TaskObject[];
};
