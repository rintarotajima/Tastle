import { Title } from "./Title";
import { TaskInputForm } from "./TaskInputForm";
import { TaskListView } from "./TaskListView";
import { ScoreBoard } from "./ScoreBoard";
import { Task } from "../types/Task";
import { Score } from "../types/Score";

export const App = () => {
  const tasks: Task[] = [
    { id: 1, title: "タスク1" },
    { id: 2, title: "タスク2" },
  ];
  const scores: Score[] = [
    { score: 1, label: "タスク進捗スコア", bgColor: "bg-green-100" },
    { score: 2, label: "全タスク-1のスコア", bgColor: "bg-red-200" },
  ];
  const handleAddTask = () => {
    console.log("タスクを追加");
  };

  const handleDeleteTask = (taskId: number) => {
    console.log("タスクを削除", taskId);
  };

  return (
    <>
      <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen ">
        <Title />
        <TaskInputForm onAddTask={handleAddTask} />
        <TaskListView tasks={tasks} onDeleteTask={handleDeleteTask} />
        <ScoreBoard scores={scores} />
      </main>
    </>
  );
};
