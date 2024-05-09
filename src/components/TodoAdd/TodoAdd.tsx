import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import SelectOption from "../shared/SelectOption/SelectOption";

type TodoAddProps = {
  setTodoTitle: (value: string) => void;
  setTodoPriority: (value: string) => void;
  addTodo: () => void;
  todoTitle: string;
  todoPriority: string;
};

const TodoAdd = ({
  setTodoTitle,
  setTodoPriority,
  addTodo,
  todoTitle,
  todoPriority,
}: TodoAddProps) => {
  return (
    <div className="flex w-full">
      <Input
        placeholder="Task name"
        extraClass="flex-1"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <SelectOption
        values={["High", "Medium", "Low"]}
        onChange={(e) => setTodoPriority(e.target.value)}
        value={todoPriority}
      />
      <Button
        innerText="Add Task"
        bgColor="green-500"
        textColor="white"
        onClick={addTodo}
      />
    </div>
  );
};

export default TodoAdd;
