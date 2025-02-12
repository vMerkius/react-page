import { IFilterItem } from "../../types/filter-item";
import CheckBox from "../UI/check-box";
import Stars from "../UI/stars";

type FilterGroupProps = {
  title: string;
  items: IFilterItem[];
  onChange: (name: string) => void;
  color: string;
  colorLight: string;
  stars?: boolean;
};

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  items,
  onChange,
  color,
  colorLight,
  stars = false,
}) => {
  return (
    <div className="filter__group">
      <h3 className="filter__header">{title}</h3>
      <ul className="filter__list">
        {items.map((item) => (
          <li
            key={item.name}
            className="filter__item"
            onClick={() => onChange(item.name)}
          >
            <CheckBox
              checked={item.checked}
              onChange={() => {}}
              color={color}
              colorLight={colorLight}
            />
            {!stars && <span className="filter__name"> {item.name}</span>}
            {stars && <Stars num={parseInt(item.name)} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
