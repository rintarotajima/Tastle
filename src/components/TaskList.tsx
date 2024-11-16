import { FC } from "react";
import { Task } from "../types";
import { TaskItem } from "./TaskItem";

/* タスクリストを管理するコンポーネント */
type Props = {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number) => void;
};

export const TaskList: FC<Props> = ({
  tasks,
  deleteTask,
  toggleTaskCompletion,
}) => {
  return (
    <section className="mb-10 max-w-xl w-full">
      <ul className="w-4/5 md:w-5/6 lg:w-full mx-auto space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggleCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </section>
  );
};
