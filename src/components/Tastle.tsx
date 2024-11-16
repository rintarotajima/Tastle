import { Title } from "./Title";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { useTaskList } from "../hooks/useTaskList";
import { ScoreBoard } from "./ScoreBoard";
import { useScore } from "../hooks/useScore";

export const Tastle = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTaskList();
  const { scores, updateScore } = useScore();

  const handleToggleTask = (taskId: number) => {
    const completed = toggleTaskCompletion(taskId); // タスクの新しい完了状態を取得
    if (completed !== undefined) {
      // タスク遂行スコアを更新
      updateScore("タスク遂行スコア", tasks, !completed, completed);
    }
  };

  const handleAddTask = (title: string) => {
    addTask(title); // タスクを追加
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId); // タスクを削除
  };

  return (
    <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <Title />
      <TaskInput addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        deleteTask={handleDeleteTask}
        toggleTaskCompletion={handleToggleTask}
      />
      <ScoreBoard scores={scores} />
    </main>
  );
};
