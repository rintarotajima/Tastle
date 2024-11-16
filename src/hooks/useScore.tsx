import { useState } from "react";
import { Score } from "../types";

export const useScore = () => {
  // 初期状態
  const [scores, setScores] = useState<Score[]>([
    {
      score: 0,
      label: "タスク遂行スコア",
      color: "bg-green-100",
    },
    {
      score: 0,
      label: "全タスク-1スコア",
      color: "bg-red-200",
    },
  ]);

  // スコア更新ロジック
  const updateScore = (
    label: string,
    tasks: { id: number; completed: boolean }[],
    completed?: boolean
  ) => {
    setScores((prevScores) =>
      prevScores.map((score) => {
        if (score.label === label) {
          if (label === "タスク遂行スコア" && completed !== undefined) {
            // タスク遂行スコア: 完了した場合 +1、未完了の場合 -1
            return {
              ...score,
              score: score.score + (completed === true ? 1 : -1),
            };
          }

          if (label === "全タスク-1スコア") {
            // 全タスク-1スコア: タスク数 - 1 (ただし最低値は 0)
            const taskCount = tasks.length;
            const newScore = Math.max(0, taskCount - 1);
            return { ...score, score: newScore };
          }
        }
        return score;
      })
    );
  };
  return { scores, updateScore };
};
