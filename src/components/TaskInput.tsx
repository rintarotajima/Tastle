import { FC } from "react";
import { useTaskInput } from "../hooks/useTaskInput";
import { TaskAddButton } from "./TaskAddButton";

type Props = {
  addTask: (title: string) => void;
};

/* タスクの入力と追加を担当するコンポーネント */

export const TaskInput: FC<Props> = ({ addTask }) => {
  const { taskInput, handleInputChange, handleSubmit } = useTaskInput(addTask);

  return (
    <>
      <section className="text-center mb-10  max-w-2xl w-full mx-auto">
        <form className="space-x-4" onSubmit={handleSubmit}>
          <input
            className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5 placeholder-shown:border-gray-50"
            type="text"
            placeholder="タスクを追加"
            value={taskInput}
            onChange={handleInputChange}
          />
          <TaskAddButton />
        </form>
      </section>
    </>
  );
};
