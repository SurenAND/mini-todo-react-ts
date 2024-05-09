import Button from "../shared/Button/Button";

type TodosProps = {
  id: number;
  deleteTodo: (id: number) => void;
  title: string;
  priority: string;
  isCompleted: boolean;
  extraClass?: string;
  priorityClass: string;
};

function Todos({
  id,
  deleteTodo,
  title,
  priority,
  isCompleted,
  extraClass,
  priorityClass,
}: TodosProps) {
  return (
    <div
      className={
        "flex justify-between pb-2 border-b-2 border-gray-200 " + extraClass
      }
    >
      <div className="flex items-center gap-2">
        <input
          className="w-4 h-4"
          type="checkbox"
          defaultChecked={isCompleted}
        />
        <div className="font-semibold text-sm">{title}</div>
        <div
          className={"text-xs text-white px-2 py-1 rounded-md " + priorityClass}
        >
          {priority}
        </div>
      </div>
      <Button
        innerText="Delete"
        bgColor="red-500"
        textColor="white"
        py="0"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
}

export default Todos;
