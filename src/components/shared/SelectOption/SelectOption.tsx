type Props = {
  values: string[];
};

const SelectOption = ({ values }: Props) => {
  return (
    <select className="font-semibold text-sm focus:outline-none">
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};

export default SelectOption;
