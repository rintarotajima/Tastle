import { Title } from "./Title";
import { InputTaskSection } from "./InputTaskSection/InputTaskSection";
import { DisplayTaskSection } from "./DisplayTaskSection/DisplayTaskSection";
import { ScoreBoard } from "./DisplayScoreSection/ScoreBoard";
import { Score } from "../types/Score";

export const App = () => {
  const scores: Score[] = [
    { score: 1, label: "タスク進捗スコア", bgColor: "bg-green-100" },
    { score: 2, label: "全タスク-1のスコア", bgColor: "bg-red-200" },
  ];
  return (
    <>
      <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen ">
        <Title />
        <InputTaskSection />
        <DisplayTaskSection />
        <ScoreBoard scores={scores}/>
      </main>
    </>
  );
};
