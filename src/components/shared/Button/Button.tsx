type ButtonProps = {
  innerText: string;
  bgColor: string;
  textColor: string;
  py?: string;
  onClick?: () => void;
};

const Button = ({
  innerText,
  bgColor,
  textColor,
  py = "1",
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`font-medium text-sm text-${textColor} bg-${bgColor} px-1 py-${py} rounded-md whitespace-nowrap focus:outline-none`}
        onClick={onClick}
      >
        {innerText}
      </button>
    </>
  );
};

export default Button;
