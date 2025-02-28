import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`); 
  }

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
          <button onClick={() => onSeeDetailsClick(task)}>
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
