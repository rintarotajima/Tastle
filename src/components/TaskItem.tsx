import { FC } from "react";
import { Task } from "../types";
import { TaskDeleteButton } from "./TaskDeleteButton";

type Props = {
  task: Task;
  onDelete: (taskId: number) => void;
  onToggleCompletion: (taskId: number) => void;
};

// 各タスクを表示するコンポーネント
export const TaskItem: FC<Props> = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <li className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          name={`${task.id}`}
          id={`${task.id}`}
          className="w-4 h-4"
        />
        <label htmlFor={`${task.id}`} className="text-lg md:text-xl">
          {task.title}
        </label>
      </div>
      <TaskDeleteButton taskId={task.id} onDelete={onDelete} />
    </li>
  );
};
