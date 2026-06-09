import { Title } from "./components/Title";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useTaskList } from "./hooks/useTaskList";
import { ScoreBoard } from "./components/ScoreBoard";
import { useScore } from "./hooks/useScore";

export const Tastle = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTaskList();
  const { scores, updateScore } = useScore();

  const handleAddTask = (title: string) => {
    addTask(title);
    const updatedTasks = [...tasks, { id: Date.now(), completed: false }]; // 新しいタスクを仮追加
    updateScore("試合数-1", updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId); // タスク削除処理
    const updatedTasks = tasks.filter((task) => task.id !== taskId); // 削除後のタスクリストを計算
    updateScore("試合数-1", updatedTasks); // 更新されたタスクリストを渡してスコアを更新
    updateScore("勝った試合", updatedTasks, true, false);
  };

  const handleToggleTask = (taskId: number) => {
    const completed = toggleTaskCompletion(taskId); // タスクの新しい完了状態を取得
    if (completed !== undefined) {
      updateScore("勝った試合", tasks, !completed, completed);
    }
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
