type DiamondProps = {
  isActive?: boolean;
  onClick: (num: number) => void;
};

const Diamond: React.FC<DiamondProps> = ({ isActive = false, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(1);
      }}
      className={`diamond ${isActive ? "diamond--active" : ""}`}
    ></button>
  );
};

export default Diamond;
