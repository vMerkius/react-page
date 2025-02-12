type OptionsProps = {
  options: {
    id: number;
    name: string;
    active: boolean;
  }[];
  handleOptionChange: (option: string) => void;
};

const Options: React.FC<OptionsProps> = ({
  options,
  handleOptionChange,
  ...props
}) => {
  return (
    <div className="latest__options small-top-gap" {...props}>
      {options.map((option) => (
        <button
          key={option.id}
          className={`latest__option ${
            option.active ? "latest__option--active" : ""
          }`}
          onClick={() => handleOptionChange(option.name)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
