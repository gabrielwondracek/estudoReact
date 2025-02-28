import { useState } from "react";

function AddTasks({onAddTaskSubmit}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input type="text" placeholder="Digite a tarefa" value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}></input>
      <button onClick={() => {
        if (!title.trim() || !description.trim()) {return alert("Favor preencher os campos vazios");}

        onAddTaskSubmit(title, description)
        setTitle("");
        setDescription("");
      }}>Adicionar</button>
    </div>
  );
}

export default AddTasks;
