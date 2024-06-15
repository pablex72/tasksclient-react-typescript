import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const { deleteTask, updateTask } = useTasks();
  return (
    <div
      key={task._id}
      className=" bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={() => {
            updateTask(task._id, {
              done: !task.done,
            });
          }}
        >
          {task.done ? "undone" : "done"}
        </button>
        <button
          onClick={async () => {
            if (!window.confirm("are you sure you want to delete this??"))
              return;
            await deleteTask(task._id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
