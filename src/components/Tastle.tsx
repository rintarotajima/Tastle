import { Title } from "./Title";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { useTaskList } from "../hooks/useTaskList";
import { ScoreBoard } from "./ScoreBoard";
import { useScore } from "../hooks/useScore";

export const Tastle = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTaskList();
  const { scores, updateScore } = useScore();

  const handleAddTask = (title: string) => {
    addTask(title);
    const updatedTasks = [...tasks, { id: Date.now(), completed: false }]; // 新しいタスクを仮追加
    updateScore("全タスク-1スコア", updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId); // 削除後のタスクリストを計算
    deleteTask(taskId); // タスク削除処理
    updateScore("全タスク-1スコア", updatedTasks); // 更新されたタスクリストを渡してスコアを更新
  };

  const handleToggleTask = (taskId: number) => {
    const completed = toggleTaskCompletion(taskId); // タスクの新しい完了状態を取得
    if (completed !== undefined) {
      // タスク遂行スコアを更新
      updateScore("タスク遂行スコア", tasks, !completed, completed);
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
