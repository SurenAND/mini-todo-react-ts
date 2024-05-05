type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <>
      <input
        className="font-semibold text-sm focus:outline-none"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
