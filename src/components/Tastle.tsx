import { Title } from "./Title";
import { TaskManager } from "./TaskManager";
import { ScoreManager } from "./ScoreManager";

export const Tastle = () => {

  return (
    <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <Title />
      <TaskManager />
      <ScoreManager />
    </main>
  );
};
