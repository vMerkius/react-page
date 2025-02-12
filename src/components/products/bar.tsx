import listIcon from "/assets/img/icon-list.svg";
import gridIcon from "/assets/img/icon-grid.svg";
import listIconActive from "/assets/img/icon-list-active.svg";
import gridIconActive from "/assets/img/icon-grid-active.svg";

type BarProps = {
  options: {
    perPage: number;
    page: number;
    sortBy: string;
    view: string;
  };
  handleChange: (name: string, value: string) => void;
};

const Bar: React.FC<BarProps> = ({ options, handleChange }) => {
  return (
    <div className="bar">
      <div className="bar__part">
        <label className="bar__name">Per Page</label>
        <select
          className="bar__select"
          onChange={(e) => handleChange("perPage", e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      <div className="bar__part">
        <label className="bar__name">Sort by</label>
        <select
          className="bar__select"
          onChange={(e) => handleChange("sortBy", e.target.value)}
        >
          <option value="price-high-to-low">Price: High {"->"} Low</option>
          <option value="price-low-to-high">Price: Low {"->"} High</option>
        </select>
      </div>

      <div className="bar__part">
        <span className="bar__name">View</span>
        <button
          onClick={() => handleChange("view", "grid")}
          className="bar__button"
        >
          <img
            src={options.view === "grid" ? gridIconActive : gridIcon}
            alt="grid icon"
          />
        </button>
        <button
          onClick={() => handleChange("view", "flex")}
          className="bar__button"
        >
          <img
            src={options.view === "flex" ? listIconActive : listIcon}
            alt="list icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Bar;
