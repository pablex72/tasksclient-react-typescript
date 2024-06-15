import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  return (
    <div key={task._id}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
