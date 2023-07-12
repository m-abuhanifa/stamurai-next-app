import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Todo from "./Todo";

function Todos() {
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:3000/api/todos", {});
      const data = await response.json();

      store.todos = data.todos;
    };

    getTodos();
  }, []);
  return (
    <div>
      {store.todos &&
        store.todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}

export default observer(Todos);
