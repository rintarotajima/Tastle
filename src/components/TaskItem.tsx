import { FC } from "react";
import { Task } from "../types";

type Props = {
  task: Task;
};

// 各タスクを表示するコンポーネント
export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <li className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50">
      <div className="flex items-center space-x-2">
        <input type="checkbox" name="" id={`${task.id}`} className="w-4 h-4" />
        <label htmlFor={`${task.id}`} className="text-lg md:text-xl">{task.title}</label>
      </div>
      <button className="text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-200 hover:shadow-md">
        消す
      </button>
    </li>
  );
};
