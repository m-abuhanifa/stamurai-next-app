import store from "@/stores/DataStore";
import { observer } from "mobx-react-lite";

function CreateTodo() {
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => (store.newDescription = e.target.value)}
      />
      <button onClick={() => store.addTodo()}>Add Todo</button>
    </div>
  );
}

export default observer(CreateTodo);
