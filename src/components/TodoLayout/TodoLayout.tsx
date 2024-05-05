import TodoAdd from "../TodoAdd/TodoAdd";
import Todos from "../Todos/Todos";

const TodoLayout = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold font-poppins-b">ToDo List</h2>
      <Todos />
      <TodoAdd />
    </div>
  );
};

export default TodoLayout;
