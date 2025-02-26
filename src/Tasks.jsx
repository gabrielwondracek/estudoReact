import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={task.isCompleted && "line-through"}
          >
            {task.title}
          </button>
          <button>
            <ChevronRightIcon />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
