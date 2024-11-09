import { FC } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { useUserTaskList } from "../hooks/useUserTaskList";

/* タスク関連を管理するコンポーネント */

export const TaskManager: FC = () => {
  const {tasks, addTask} = useUserTaskList();
  
  return (
    <>
        <TaskInput addTask={addTask}  />
        <TaskList tasks={tasks} />
    </>
  )
};
