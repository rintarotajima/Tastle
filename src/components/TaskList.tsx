import { FC } from "react";
import { Task } from "../types";

type Props = {
  tasks: Task[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <ul className="w-4/5 md:w-5/6 lg:w-full mx-auto space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50"
        >
          <div className="flex items-center space-x-2">
            <input type="checkbox" id={`${task.id}`} className="w-4 h-4" />
            <label htmlFor={`${task.id}`} className="text-lg md:text-xl">
              {task.title}
            </label>
          </div>
          <button className="text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-200 hover:shadow-md">
            消す
          </button>
        </li>
      ))}
    </ul>
  );
};
