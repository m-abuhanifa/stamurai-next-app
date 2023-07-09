import store from "@/stores/DataStore";

export default function Todos() {
  return (
    <div>
      <div>
        {store.todos.map((todo, index) => (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <h1>{todo.status}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
