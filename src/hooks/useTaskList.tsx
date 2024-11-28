import { useEffect, useState } from "react";
import { Task } from "../types/task";

type useTaskListReturn = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number) => boolean | undefined;
};

export const useTaskList = (): useTaskListReturn => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // タスク内容を受け取り、既存のタスクデータを更新する関数
  const addTask = (title: string) => {
    if (!title) return;
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      title,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  // タスクidを受け取り、idと合うタスクデータを削除する関数
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // タスクidを受け取り、idと合うタスクの完了状態を切り替える関数
  const toggleTaskCompletion = (taskId: number): boolean | undefined => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
      setTasks(updatedTasks);
      return updatedTasks[taskIndex].completed; // 新しい完了状態を返す
    }
    return undefined;
  };

  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};
