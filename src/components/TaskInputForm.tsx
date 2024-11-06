import { FC, useState } from "react";

type TaskInput = {
  onTaskChange: (title: string) => void;
};

const TaskInput: FC<TaskInput> = ({ onTaskChange }) => {
  return (
    <input
      className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5 placeholder-shown:border-gray-50"
      type="text"
      placeholder="タスクを追加"
      onChange={(e) => onTaskChange(e.target.value)}
    />
  );
};

type AddTaskButton = {
  onAddTask: () => void;
};

const AddTaskButton: FC<AddTaskButton> = ({ onAddTask }) => {
  return (
    <button
      onClick={onAddTask}
      className="text-lg text-white bg-orange-300 hover:bg-orange-500 rounded-md p-2.5"
    >
      追加
    </button>
  );
};

type TaskInputFormProps = {
  onAddTask: (title: string) => void;
};

export const TaskInputForm: FC<TaskInputFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    onAddTask(task);
    setTask("");
  };

  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-2xl w-full mx-auto">
        <TaskInput onTaskChange={setTask} />
        <AddTaskButton onAddTask={handleAddTask} />
      </section>
    </>
  );
};
