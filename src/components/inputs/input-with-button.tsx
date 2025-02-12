import ButtonMain from "../UI/button-main";

type InputWithButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputRef: React.RefObject<HTMLInputElement>;
  handleClick: () => void;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
};

const InputWithButton: React.FC<InputWithButtonProps> = ({
  inputRef,
  handleClick,
  buttonProps,
  children,
  ...inputProps
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="input-with-btn" onSubmit={handleFormSubmit}>
      <input ref={inputRef} className="input" {...inputProps} />
      <ButtonMain onClick={handleClick} {...buttonProps} small>
        {children}
      </ButtonMain>
    </form>
  );
};

export default InputWithButton;
