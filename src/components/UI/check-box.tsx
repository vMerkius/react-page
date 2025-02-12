import checkIcon from "/assets/img/icon-checked.svg";

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
  color: string;
  colorLight: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  color,
  colorLight,
}) => {
  return (
    <div
      onClick={onChange}
      style={{ backgroundColor: checked ? color : colorLight }}
      className="checkbox"
    >
      {checked && (
        <img src={checkIcon} alt="check icon" className="checkbox__icon" />
      )}
    </div>
  );
};

export default CheckBox;
