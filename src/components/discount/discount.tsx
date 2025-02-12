import { useState } from "react";
import HeaderWrapper from "../UI/header-wrapper";
import Options from "../latest/latest-options";
import Headphones from "./headphones";
import Laptop from "./laptop";
import Other from "./other";
import { IActive } from "../../types/active";

type componentsMapType = {
  [key: string]: React.FC;
};

const componentsMap: componentsMapType = {
  Headphones,
  Laptop,
  Other,
};

const Discount = () => {
  const [options, setOptions] = useState<IActive[]>([
    {
      id: 1,
      name: "Headphones",
      active: true,
    },
    {
      id: 2,
      name: "Laptop",
      active: false,
    },
    {
      id: 3,
      name: "Other",
      active: false,
    },
  ]);

  const handleOptionChange = (chosen: string) => {
    setOptions((prev) =>
      prev.map((option) => {
        option.active = option.name === chosen;
        return option;
      })
    );
  };

  return (
    <section className="discount">
      <HeaderWrapper header="Discount Item" largeGap>
        <>
          <Options options={options} handleOptionChange={handleOptionChange} />
          <div className="discount__container medium-top-gap">
            {options.map((option) => {
              if (!option.active) return null;

              const Component = componentsMap[option.name];
              return Component ? <Component key={option.id} /> : null;
            })}
          </div>
        </>
      </HeaderWrapper>
    </section>
  );
};

export default Discount;
