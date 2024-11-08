import { Title } from "./Title";
import { Score } from "../types";
import { DisplayScoreBoard } from "./DisplayScoreBoard";
import { TaskManager } from "./TaskManager";

export const Tastle = () => {
  const score: Score[] = [
    { score: 1, label: "タスク進捗スコア", color: "bg-green-100" },
    { score: 2, label: "全タスク数-1スコア", color: "bg-red-200" },
  ];

  return (
    <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <Title />
      <TaskManager />
      <DisplayScoreBoard scores={score} />
    </main>
  );
};
