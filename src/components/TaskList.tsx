import { FC } from "react";
import { Task } from "../types";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
};

/* タスクリストを管理するコンポーネント */

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <section className="mb-10 max-w-xl w-full">
       <ul className="w-4/5 md:w-5/6 lg:w-full mx-auto space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id}  task={task}/>
      ))}
    </ul>
    </section>
  );
};
