import CreateTodo from "./CreateTodo";
import Todos from "./Todos";

export default function All() {
  return (
    <div className="my-5">
      <CreateTodo />

      <Todos />
    </div>
  );
}
