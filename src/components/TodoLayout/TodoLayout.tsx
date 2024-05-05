import TodoInput from "../TodoInput/TodoInput";
import Todos from "../Todos/Todos";

const TodoLayout = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold font-poppins-b">ToDo List</h2>
      <Todos />
      <TodoInput />
    </div>
  );
};

export default TodoLayout;
