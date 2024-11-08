import { useState } from "react";
import { Task } from "../types";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

/* タスク関連を管理するコンポーネント */

export const TaskManager = () => {
  // タスクを格納する配列をuseStateで定義
  const [tasks, setTasks] = useState<Task[]>([]);

  // タスクを追加するボタンを押したときの処理
  const addTask = (title: string) => {
    const newTask: Task = { 
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} />
    </>
  )
};
