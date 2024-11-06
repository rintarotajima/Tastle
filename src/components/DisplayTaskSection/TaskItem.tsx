import { DeleteTaskButton } from "./DeleteTaskButton";

export const TaskItem = () => {
  const tasks = [
    { id: 1, title: "タスク1" },
    { id: 2, title: "タスク2" },
  ];
  return (
    <ul className="w-4/5 md:w-5/6 lg:w-full mx-auto space-y-4">
      {tasks.map((task) => (
        <>
          <li
            key={task.id}
            className="flex items-center justify-around p-2 md:p-3 rounded-md bg-orange-50"
          >
            <div className="flex items-center space-x-2">
              <input type="checkbox" id={`${task.id}`} className="w-4 h-4" />
              <label htmlFor={`${task.id}`} className="text-lg md:text-xl">
                {task.title}
              </label>
            </div>
            <DeleteTaskButton />
          </li>
        </>
      ))}
    </ul>
  );
};
