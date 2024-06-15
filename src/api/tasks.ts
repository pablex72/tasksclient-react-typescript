import { CreateTask } from "../interfaces/task.interface";

const API = "http://localhost:3000/api";

export const createTaskRequest = (task: CreateTask) => {
  return fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTaskRequest = () => {
  return fetch(`${API}/tasks`);
};
