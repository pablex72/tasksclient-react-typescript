import { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTaskRequest } from "../api/tasks";
import { CreateTask, Task } from "../interfaces/task.interface";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}
export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: () => {},
});

interface Props {
  children: React.ReactNode;
}
export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

    //this context use get
  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  //this context use POST
  const createTask = async (task: CreateTask) => {
    console.log(task);
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
