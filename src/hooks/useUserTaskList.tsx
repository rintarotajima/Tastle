import { useState } from "react";
import { Task } from "../types";

//userTaskListの戻り値の型定義
interface useUserTaskListReturn {
  tasks: Task[];
  addTask: (title: string) => void;
}

export const useUserTaskList = (): useUserTaskListReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask };
};
