import { makeAutoObservable } from "mobx";

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (
  todos: Todo[],
  title: string,
  description: string,
  status: Status
): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    description,
    status,
  },
];

class Store {
  todos: Todo[] = [];
  newTodo: string = "";
  newDescription: string = "";
  status: Status = "In_Progress";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = addTodo(
      this.todos,
      this.newTodo,
      this.newDescription,
      this.status
    );
    this.newTodo = "";
    this.newDescription = "";
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }
}

const store = new Store();

export default store;
