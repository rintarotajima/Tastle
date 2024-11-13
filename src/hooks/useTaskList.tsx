import { useState } from "react";
import { Task } from "../types";

//userTaskListの戻り値の型定義
interface useTaskListReturn {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: number) => void;
}

export const useTaskList = (): useTaskListReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  // タスクを削除する関数：戻り値なし
  // 削除するタスクのidを引数、idと一致しないタスクをフィルター
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return { tasks, addTask, deleteTask };
};
