import { FC } from "react";
import { TaskList } from "./TaskList";
import { Task } from "../types";

type Props = {
  tasks: Task[];
};

export const DisplayTaskList: FC<Props> = ({ tasks }) => {
  return (
    <>
      <section className="mb-10 max-w-xl w-full">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-6">
          ・ 終わったらチェック !
        </h2>
        <TaskList tasks={tasks} />
      </section>
    </>
  );
};
