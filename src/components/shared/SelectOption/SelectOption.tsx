type SelectOptionProps = {
  values: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

const SelectOption = ({ values, onChange, value }: SelectOptionProps) => {
  return (
    <select
      className="font-semibold text-sm focus:outline-none"
      onChange={onChange}
      value={value}
    >
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
