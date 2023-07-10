type Status = "To Do" | "In Progress" | "Completed";

type Todo = {
  id: number;
  title: string;
  description: string;
  status: Status;
};
