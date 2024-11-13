import { FC } from "react";

type Props = {
  taskId: number;
  onDelete: (taskId: number) => void;
};

export const TaskDeleteButton: FC<Props> = ({ taskId, onDelete }) => {
  const handleDelete = () => {
    onDelete(taskId);
  };
  return (
    <button
      onClick={handleDelete}
      className="text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-200 hover:shadow-md"
    >
      消す
    </button>
  );
};
