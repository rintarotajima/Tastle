import { DisplayTaskTitle } from "./DisplayTaskTitle";
import { TaskItem } from "./TaskItem";

export const DisplayTaskSection = () => {
  return (
    <>
      <section className="mb-10 max-w-xl w-full">
        <DisplayTaskTitle />
        <TaskItem />
      </section>
    </>
  );
};
