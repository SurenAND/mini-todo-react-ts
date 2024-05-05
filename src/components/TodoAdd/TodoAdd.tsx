import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import SelectOption from "../shared/SelectOption/SelectOption";

type Props = {};

const TodoAdd = ({}: Props) => {
  return (
    <div className="flex w-full">
      <Input placeholder="Task name" />
      <SelectOption values={["high", "medium", "low"]} />
      <Button innerText="Add Task" bgColor="green-400" textColor="white" />
    </div>
  );
};

export default TodoAdd;
