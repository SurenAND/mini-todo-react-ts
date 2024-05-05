import TodoLayout from "../TodoLayout/TodoLayout";

const Todo = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] h-[420px] bg-gradient-to-l from-blue-600 to-blue-400 rounded-3xl -rotate-6 relative shadow-sh1"></div>
      <div className="w-[500px] h-[400px] rounded-3xl bg-white absolute shadow-sh1 px-20 py-14">
        <TodoLayout />
      </div>
    </div>
  );
};

export default Todo;
