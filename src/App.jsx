import { useEffect, useState } from "react";
import AddTasks from "./AddTasks";
import Tasks from "./Tasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

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

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  //A API ABAIXO ESTA COMENTADA PARA NÃO CONFLITAR COM O LOCAL STORAGE
  /*useEffect(() => {
    const fetchTasks = async () => {
      //CHAMAR A API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'); 
      //PEGAR OS DADOS DELA
      const data = await response.json();
      //ARMAZENAR ESSES DADOS
      setTasks(data);
    };
    fetchTasks();
  }, []);*/ 

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl font-bold text-slate-100 text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
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
