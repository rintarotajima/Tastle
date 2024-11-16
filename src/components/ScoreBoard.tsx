import { FC } from "react";
import { Score } from "../types";
import { ScoreItem } from "./ScoreItem";

type Props = {
  scores: Score[];
};

export const ScoreBoard: FC<Props> = ({ scores }) => {
  return (
    <section className="mb-8 max-w-xl md:max-w-2xl w-full">
      <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-7">
        ・ 現在のスコア
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6">
        {scores.map((scoreItem, index) => (
          <ScoreItem key={index} {...scoreItem} />
        ))}
      </div>
    </section>
  );
};
