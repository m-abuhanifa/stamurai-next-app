import { makeAutoObservable } from "mobx";

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (
  id: number,
  todos: Todo[],
  title: string,
  description: string,
  status: Status
): Todo[] => [
  ...todos,
  {
    id: id,
    title,
    description,
    status,
  },
];

class Store {
  id: number = 0;
  todos: Todo[] = [];
  newTodo: string = "";
  newDescription: string = "";
  status: Status = "In_Progress";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = addTodo(
      this.id,
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
