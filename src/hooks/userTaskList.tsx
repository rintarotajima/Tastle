import { useState } from "react";

type Task = {
  id: number;
  title: string;
};

//userTaskListの戻り値の型定義
interface UserTaskListReturn {
  tasks: Task[];
  addTask: (title: string) => void;
}

export const useTaskList = (): UserTaskListReturn => {

  // 表示するタスクはユーザによって変化する→useStateで定義
  const [tasks, setTasks] = useState<Task[]>([]);

  // 新しいタスクを追加する関数
  const addTask = (title: string) => {
    // 新しいタスクのプロパティ
    const newTask: Task = {
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask };
};
