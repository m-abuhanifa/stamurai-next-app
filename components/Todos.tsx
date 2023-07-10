import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";

function Todos() {
  return (
    <div>
      <div>
        {store.todos.map((todo, index) => (
          <div
            key={index}
            className="flex gap-x-5 my-3 p-2 border rounded w-[700px] mx-auto"
          >
            <h1>Title : {todo.title}</h1>
            <h1>Description : {todo.description}</h1>
            <h1>Status : {todo.status}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default observer(Todos);
