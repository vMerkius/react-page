import Dot from "./dot";

type CustomListItemProps = {
  color: string;
  description: string;
};

const CustomListItem: React.FC<CustomListItemProps> = ({
  color,
  description,
}) => {
  return (
    <div className="custom-list-item">
      <Dot color={color} />
      <li>{description}</li>
    </div>
  );
};

export default CustomListItem;
