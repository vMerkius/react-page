import { useState } from "react";
import { IItem } from "../../types/item";
import More from "./more";
import Additional from "./additional";
import Reviews from "./reviews";
import Video from "./video";
import itemOptionsData from "../../data/item-options-data";

type DescriptionProps = {
  item: IItem;
};

const Description: React.FC<DescriptionProps> = ({ item }) => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="description">
      <div className="description__container">
        <div className="description__options">
          {itemOptionsData.map((option) => (
            <button
              key={option.id}
              onClick={() => setActive(option.id)}
              className={`description__option ${
                active === option.id ? "description__option--active" : ""
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
        {active === 1 && (
          <More descriptionLong={item.descriptionLong} more={item.more} />
        )}
        {active === 2 && <Additional additional={item.descriptionLong} />}

        {active === 3 && <Reviews reviews={item.reviews} />}

        {active === 4 && <Video link={item.video} />}
      </div>
    </div>
  );
};

export default Description;
