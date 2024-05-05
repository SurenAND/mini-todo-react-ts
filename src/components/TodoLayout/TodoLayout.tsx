import { todosList } from "../../data/todosList";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todos from "../Todos/Todos";

const TodoLayout = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold font-poppins-b">ToDo List</h2>
      {todosList.map((todo, index, array) => (
        <Todos
          key={index}
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
      <TodoAdd />
    </div>
  );
};

export default TodoLayout;
