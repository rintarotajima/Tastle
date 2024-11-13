import { FC } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { useTaskList } from "../hooks/useTaskList";

/* タスク関連を管理するコンポーネント */

export const TaskManager: FC = () => {
  const { tasks, addTask, deleteTask } = useTaskList();

  return (
    <>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};
