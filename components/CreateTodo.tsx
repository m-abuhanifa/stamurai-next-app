import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Progress" as Status);

  const options = [
    {
      text: "In_Progress",
      value: "In_Progress",
    },
    {
      text: "To_Do",
      value: "To_Do",
    },
    {
      text: "Completed",
      value: "Completed",
    },
  ];

  const createTodo = async () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all the fields");
      return;
    }
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });
    const data = await res.json();

    if (data.todo.id) {
      store.id = data.todo.id;
      store.newTodo = title;
      store.newDescription = description;
      store.status = status;
      store.addTodo();
      setTitle("");
      setDescription("");
      setStatus("In_Progress" as Status);
    }
  };

  return (
    <section className="flex justify-center items-center my-5">
      <div className="flex flex-col gap-y-5 md:flex-row justify-around items-center gap-x-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500 w-80  md:w-60 lg:w-80 "
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500 w-80  md:w-60 lg:w-80  "
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
    </section>
  );
}

export default observer(CreateTodo);
