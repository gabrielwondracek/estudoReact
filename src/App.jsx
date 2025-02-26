import { useState } from "react";
import AddTasks from "./AddTasks";
import Tasks from "./Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "ola",
      isCompleted: false,
    },
    {
      id: 2,
      title: "oi",
      isCompleted: false,
    },
    {
      id: 3,
      title: "tchau",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //ATUALIZAR TAREFA
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //NAO PRECISO ATUALIZAR
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl font-bold text-slate-100 text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
