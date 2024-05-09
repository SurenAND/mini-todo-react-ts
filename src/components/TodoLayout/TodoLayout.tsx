import { useState } from "react";
import { todosList } from "../../data/todosList";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todos from "../Todos/Todos";

type Todo = {
  id: number;
  title: string;
  priority: string;
  isCompleted: boolean;
};

const TodoLayout = () => {
  const [todos, setTodos] = useState<Todo[]>(todosList);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoPriority, setTodoPriority] = useState<string>("High");

  const addTodo = (): void => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title: todoTitle,
      priority: todoPriority,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodoTitle("");
    setTodoPriority("");
  };

  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold font-poppins-b">ToDo List</h2>
      <div className="flex flex-col gap-4 overflow-y-auto h-48">
        {todos.map((todo, index, array) => (
          <Todos
            key={index}
            id={todo.id}
            deleteTodo={deleteTodo}
            title={todo.title}
            priority={todo.priority}
            isCompleted={todo.isCompleted}
            extraClass={index === array.length - 1 ? "border-b-0" : ""}
            priorityClass={
              todo.priority === "Low"
                ? "bg-green-500"
                : todo.priority === "Medium"
                ? "bg-yellow-500"
                : "bg-red-500"
            }
          />
        ))}
      </div>
      <TodoAdd
        todoTitle={todoTitle}
        todoPriority={todoPriority}
        setTodoTitle={setTodoTitle}
        setTodoPriority={setTodoPriority}
        addTodo={addTodo}
      />
    </div>
  );
};

export default TodoLayout;
