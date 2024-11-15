import { Score } from "../types";
import { DisplayScoreBoard } from "./DisplayScoreBoard";

export const ScoreManager = () => {
  const score: Score[] = [
    { score: 1, label: "タスク進捗スコア", color: "bg-green-100" },
    { score: 2, label: "全タスク数-1スコア", color: "bg-red-200" },
  ];
  return (
    <>
      <DisplayScoreBoard scores={score} />
    </>
  );
};
