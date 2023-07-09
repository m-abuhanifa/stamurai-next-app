import CreateTodo from "./CreateTodo";
import Todos from "./Todos";

export default function All() {
  return (
    <div>
      <div>
        <CreateTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}
