import { useState } from "react";
import { Task } from "../types";

// タスクリストを構成するタスクとそのロジックを担当しているフック

interface useTaskListReturn {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number) => boolean;
}

export const useTaskList = (): useTaskListReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: number): boolean => {
    let taskCompleted = false;
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          taskCompleted = !task.completed;
          return { ...task, completed: taskCompleted}
        }
        return task;
      })
    );
    return taskCompleted; // 完了状態を返す
  };

  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};
