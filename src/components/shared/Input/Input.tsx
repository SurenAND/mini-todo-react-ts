type InputProps = {
  placeholder: string;
  extraClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ placeholder, extraClass, onChange, value }: InputProps) => {
  return (
    <>
      <input
        className={"font-semibold text-sm focus:outline-none " + extraClass}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
