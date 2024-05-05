type InputProps = {
  placeholder: string;
  extraClass?: string;
};

const Input = ({ placeholder, extraClass }: InputProps) => {
  return (
    <>
      <input
        className={"font-semibold text-sm focus:outline-none " + extraClass}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
