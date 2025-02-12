type ButtonMainProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  small?: boolean;
};

const ButtonMain: React.FC<ButtonMainProps> = ({
  children,
  small,
  ...props
}): React.ReactElement => {
  return (
    <button className={`btn-main ${small ? "btn-main--small" : ""}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonMain;
