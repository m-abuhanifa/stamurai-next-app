import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { BiSave } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { LuEdit } from "react-icons/lu";

function Todos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Progress" as Status);
  const [edit, setEdit] = useState(false);
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
  const updateTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all the fields");
      return;
    }
    store.newTodo = title;
    store.newDescription = description;
    store.status = status;
    setEdit((m) => !m);
  };
  return (
    <div>
      <div>
        {store.todos.map((todo, index) => (
          <div
            key={index}
            className="flex gap-x-5 my-3 p-2 border rounded w-[700px] mx-auto"
          >
            <input
              type="text"
              placeholder="title"
              defaultValue={todo.title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
              disabled={!edit}
            />
            <input
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
              defaultValue={todo.description}
              disabled={!edit}
            />
            <select
              name="status"
              id="select"
              className="px-3 py-2 border-2 border-gray-300 rounded-md bg-gray-300 placeholder:text-gray-500"
              onChange={(e) => setStatus(e.target.value as Status)}
              defaultValue={todo.status}
              disabled={!edit}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>

            <button onClick={() => store.removeTodo(todo.id)}>
              <BsTrash size={20} className="cursor-pointer text-red-500" />
            </button>

            {edit ? (
              <button onClick={updateTodo}>
                <BiSave size={20} className="cursor-pointer text-green-500" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setEdit((m) => !m);
                }}
              >
                <LuEdit size={20} className="cursor-pointer text-green-500" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default observer(Todos);
