import { useState } from "react";

interface useUserTaskInputReturn {
  taskInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

export const useUserTaskInput = (
  addTask: (title: string) => void
): useUserTaskInputReturn => {
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
