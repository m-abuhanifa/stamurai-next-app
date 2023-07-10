import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Progress" as Status);
  const options = [
    {
      text: "In Progress",
      value: "In Progress",
    },
    {
      text: "To Do",
      value: "To Do",
    },
    {
      text: "Completed",
      value: "Completed",
    },
  ];
  const createTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all the fields");
      return;
    }
    store.newTodo = title;
    store.newDescription = description;
    store.status = status;
    store.addTodo();
    setTitle("");
    setDescription("");
    setStatus("In Progress" as Status);
  };
  return (
    <div className="flex justify-center items-center gap-x-5">
      <div className="flex justify-around items-center gap-x-5">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
          value={description}
        />
        <select
          name="status"
          id="select"
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
          onChange={(e) => setStatus(e.target.value as Status)}
          value={status}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button
          onClick={createTodo}
          className="px-3 py-2.5 border-2 bg-indigo-700 text-white font-[500] rounded-md"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default observer(CreateTodo);
