import { FC } from "react";

const Title = () => {
  return (
    <>
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Task Battle
        </h1>
      </section>
    </>
  );
};

type InputTaskProps = {
  onAddTask: () => void;
};

const InputTask: FC<InputTaskProps> = ({ onAddTask }) => {
  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-2xl w-full mx-auto">
        <input
          className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5 placeholder-shown:border-gray-50"
          type="text"
          placeholder="タスクを追加"
        />
        <button
          onClick={onAddTask}
          className="text-lg text-white bg-orange-300 hover:bg-orange-500 rounded-md p-2.5"
        >
          追加
        </button>
      </section>
    </>
  );
};

type Task = {
  id: number;
  title: string;
};

type TaskListRowProps = {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
};

const TaskListRow: FC<TaskListRowProps> = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="w-4/5 md:w-5/6 lg:w-full mx-auto space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50"
        >
          <div className="flex items-center space-x-2">
            <input type="checkbox" id={`${task.id}`} className="w-4 h-4" />
            <label htmlFor={`${task.id}`} className="text-lg md:text-xl">
              {task.title}
            </label>
          </div>
          <button onClick={() => onDeleteTask(task.id)} className="text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-200 hover:shadow-md">
            消す
          </button>
        </li>
      ))}
    </ul>
  );
};

type TaskListViewProps = {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
};
const TaskListView: FC<TaskListViewProps> = ({ tasks, onDeleteTask }) => {
  return (
    <>
      <section className="mb-10 max-w-xl w-full">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-6">
          ・ 終わったらチェック !
        </h2>
        <TaskListRow tasks={tasks} onDeleteTask={onDeleteTask} />
      </section>
    </>
  );
};

type ScoreItemProps = {
  score: number;
  label: string;
  color: string;
};
const ScoreItem: FC<ScoreItemProps> = ({ score, label, color }) => {
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

type Score = {
  score: number;
  label: string;
  color: string;
};

type ScoreBoardProps = {
  scores: Score[];
};

const ScoreBoard: FC<ScoreBoardProps> = ({ scores }) => {
  return (
    <>
      <section className="mb-8 max-w-xl md:max-w-2xl w-full">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-7">
          ・ 現在のスコア
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {scores.map((scoreItem, index) => (
            <ScoreItem key={index} score={scoreItem.score} label={scoreItem.label} color={scoreItem.color} />
          ))}
        </div>
      </section>
    </>
  );
};

export const TaskBattle = () => {
  const tasks: Task[] = [
    { id: 1, title: "タスク1" },
    { id: 2, title: "タスク2" },
  ];
  const scores: Score[] = [
    { score: 1, label: "タスク進捗スコア", color: "bg-green-100" },
    { score: 2, label: "全タスク-1のスコア", color: "bg-red-200" },
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
        <InputTask onAddTask={handleAddTask} />
        <TaskListView tasks={tasks} onDeleteTask={handleDeleteTask}  />
        <ScoreBoard scores={scores} />
      </main>
    </>
  );
};
