type ButtonGreenProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  small?: boolean;
};

const ButtonGreen: React.FC<ButtonGreenProps> = ({
  children,
  small,
  ...props
}): React.ReactElement => {
  return (
    <button className="btn-green" {...props}>
      {children}
    </button>
  );
};

export default ButtonGreen;
