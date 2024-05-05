type Todo = {
  id: number;
  title: string;
  priority: string;
  isCompleted: boolean;
};

export const todosList: Todo[] = [
  {
    id: 1,
    title: "Task 1",
    priority: "High",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Task 2",
    priority: "Medium",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Task 3",
    priority: "Low",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Task 4",
    priority: "High",
    isCompleted: false,
  },
];
