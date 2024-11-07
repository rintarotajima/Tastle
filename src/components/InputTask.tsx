import { useState } from "react";

export const InputTask = () => {
  const [task, setTask] = useState("");

  const onInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-2xl w-full mx-auto">
        <input
          className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5 placeholder-shown:border-gray-50"
          type="text"
          placeholder="タスクを追加"
          value={task}
          onChange={onInputTask}
        />
        <button className="text-lg text-white bg-orange-300 hover:bg-orange-500 rounded-md p-2.5">
          追加
        </button>
      </section>
    </>
  );
};
