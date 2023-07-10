type Status = "To_Do" | "In_Progress" | "Completed";

type Todo = {
  id: number;
  title: string;
  description: string;
  status: Status;
};
