import errorIcon from "/assets/img/icon-error.svg";

type ErrorProps = {
  message: string;
};

const ErrorInfo: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error">
      <img src={errorIcon} alt="Error icon" className="error__icon" />
      <p className="error__message">{message}</p>
    </div>
  );
};

export default ErrorInfo;
