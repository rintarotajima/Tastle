import { FC, useState } from "react";

type Props = {
  addTask: (title: string) => void;
};

/* タスクの入力と追加を担当するコンポーネント */

export const TaskInput: FC<Props> = ({ addTask }) => {
  // テキストボックスに入力された値を格納するためにuseStateで定義
  const [task, setTask] = useState("");

  // テキストボックスに入力された値をtaskに設定する処理
  const onChangeInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // 追加ボタンを押したときの処理
  const onAddTask = () => {
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-2xl w-full mx-auto">
        <input
          className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5 placeholder-shown:border-gray-50"
          type="text"
          placeholder="タスクを追加"
          value={task}
          onChange={onChangeInputTask}
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
