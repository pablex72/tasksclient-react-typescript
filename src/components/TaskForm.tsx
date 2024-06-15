import { ChangeEvent, FormEvent, useState } from "react";
import { createTaskRequest } from "../api/tasks";
import { useTasks } from "../context/useTasks";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });
  // const { tasks } = useTasks();
  // console.log(tasks)

  const {createTask}=useTasks()
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // obtiene el name del campo que disparó el evento (por ejemplo, "title" o "description")
    // obtiene el nuevo valor que el usuario ingresó en ese campo.
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task)
    console.log(task);

  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          type="text"
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          name="description"
          placeholder="Write a title"
          rows={3}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="" className=" inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-indigo-600"
            onChange={(e) => {
              setTask({ ...task, done: !task.done });
            }}
          />
          <span>Done</span>
        </label>

        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
