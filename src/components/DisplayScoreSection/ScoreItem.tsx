import { FC } from "react";

type Props = {
  score: number;
  label: string;
  color: string;
};

export const ScoreItem: FC<Props> = ({ score, label, color }) => {
  return (
    <>
      <div
        className={`${color} p-4 rounded-md text-center w-3/4 md:w-1/2 space-y-3 mx-auto mb-3 md:mb-0`}
      >
        <span className="text-5xl md:text-6xl font-bold font-mono">
          {score}
        </span>
        <p
          className={`font-semibold ${color === "bg-green-100" ? "text-green-500" : "text-red-500"}`}
        >
          {label}
        </p>
      </div>
    </>
  );
};
