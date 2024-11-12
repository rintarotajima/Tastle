import { FC } from "react";
import { Task } from "../types";
import { TaskDeleteButton } from "./TaskDeleteButton";

type Props = {
  task: Task;
};

// 各タスクを表示するコンポーネント
export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <li className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50">
      <div className="flex items-center space-x-2">
        <input type="checkbox" name={`${task.id}`} id={`${task.id}`} className="w-4 h-4" />
        <label htmlFor={`${task.id}`} className="text-lg md:text-xl">{task.title}</label>
      </div>
      <TaskDeleteButton />
    </li>
  );
};
