import { useState } from "react";

interface useTaskInputReturn {
  taskInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

export const useTaskInput = (
  addTask: (title: string) => void
): useTaskInputReturn => {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return {
    taskInput,
    handleInputChange,
    handleSubmit,
  };
};
