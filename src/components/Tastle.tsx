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
    updateScore("タスク遂行スコア", tasks, completed); // 完了状態に応じてスコアを変更
    updateScore("全タスク-1スコア", tasks);
  };
  
  return (
    <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <Title />
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={handleToggleTask}
      />
      <ScoreBoard scores={scores} />
    </main>
  );
};
