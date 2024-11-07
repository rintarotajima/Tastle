import { DisplayTaskList } from "./DisplayTaskList";
import { InputTask } from "./InputTask";
import { Title } from "./Title";
import { Task } from "../types";
import { Score } from "../types";
import { DisplayScoreBoard } from "./DisplayScoreBoard";

export const Tastle = () => {
  const tasks: Task[] = [
    { id: 1, title: "タスク1" },
    { id: 2, title: "タスク2" },
  ];

  const score: Score[] = [
    { score: 1, label: "タスク進捗スコア", color: "bg-green-100" },
    { score: 2, label: "全タスク数-1スコア", color: "bg-red-200" },
  ];

  return (
    <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <Title />
      <InputTask />
      <DisplayTaskList tasks={tasks} />
      <DisplayScoreBoard scores={score} />
    </main>
  );
};
