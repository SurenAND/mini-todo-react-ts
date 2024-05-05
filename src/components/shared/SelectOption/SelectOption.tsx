type SelectOptionProps = {
  values: string[];
};

const SelectOption = ({ values }: SelectOptionProps) => {
  return (
    <select className="font-semibold text-sm focus:outline-none">
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
