import { useEffect, useState } from "react";
import { Score } from "../types/score";

export const useScore = () => {
  const [scores, setScores] = useState<Score[]>(() => {
    const savedScores = localStorage.getItem("scores");
    return savedScores
      ? JSON.parse(savedScores)
      : [
          {
            score: 0,
            label: "勝った試合",
            color: "bg-green-100",
          },
          {
            score: 0,
            label: "試合数-1",
            color: "bg-red-200",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  // スコア更新ロジック
  const updateScore = (
    label: string,
    tasks: { id: number; completed: boolean }[],
    previousCompleted?: boolean,
    currentCompleted?: boolean
  ) => {
    setScores((prevScores) =>
      prevScores.map((score) => {
        if (score.label === label) {
          if (label === "勝った試合") {
            let newScore = score.score;
            // 勝った試合: 完了 +1、未完了 -1
            if (previousCompleted === false && currentCompleted === true) {
              newScore = score.score + 1;
            }
            if (previousCompleted === true && currentCompleted === false) {
              newScore = score.score - 1;
            }
            return { ...score, score: Math.max(0, newScore) };
          }

          if (label === "試合数-1") {
            // 試合数-1: タスク数 - 1 (ただし最低値は 0)
            const taskCount = tasks.length;
            const newScore = taskCount <= 1 ? 0 : taskCount - 1;
            return { ...score, score: newScore };
          }
        }
        return score;
      })
    );
  };
  return { scores, updateScore };
};
