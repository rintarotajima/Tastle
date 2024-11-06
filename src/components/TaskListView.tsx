import { FC } from "react";
import { TaskListRow } from "./TaskListRow";
import { Task } from "../types/Task";


type TaskListViewProps = {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
};

export const TaskListView: FC<TaskListViewProps> = ({ tasks, onDeleteTask }) => {
  return (
    <>
      <section className="mb-10 max-w-xl w-full">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-6">
          ・ 終わったらチェック !
        </h2>
        <TaskListRow tasks={tasks} onDeleteTask={onDeleteTask} />
      </section>
    </>
  );
};
