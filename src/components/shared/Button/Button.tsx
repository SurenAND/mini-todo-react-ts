type Props = {
  innerText: string;
  bgColor: string;
  textColor: string;
};

const Button = ({ innerText, bgColor, textColor }: Props) => {
  return (
    <>
      <button
        className={`font-semibold text-sm text-${textColor} bg-${bgColor} p-1 rounded-md whitespace-nowrap focus:outline-none`}
      >
        {innerText}
      </button>
    </>
  );
};

export default Button;
