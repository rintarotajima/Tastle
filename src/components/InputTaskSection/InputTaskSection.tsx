import { Input } from "./input";
import { AddTaskButton } from "./AddTaskButton";

export const InputTaskSection = () => {
  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-2xl w-full mx-auto">
        <Input />
        <AddTaskButton />
      </section>
    </>
  );
};
