import HeaderWrapper from "../UI/header-wrapper";
import { useEffect, useState } from "react";
import Options from "./latest-options";
import LatestBox from "./latest-box";
import { IOption } from "../../types/option";
import { IItem } from "../../types/item";
import LoadingLatest from "../loading/loading-latest";
import { LATEST } from "../../data/latest-data";
import ErrorInfo from "../UI/error-box";
import { fetchLatestItems } from "../../utils/functions";

const Latest = () => {
  const [latestItems, setLatestItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<IOption[]>(LATEST);
  const [error, setError] = useState<string>("");

  const handleOptionChange = (chosen: string) => {
    setOptions((prev) => {
      return prev.map((option) => {
        return {
          ...option,
          active: option.name === chosen,
        };
      });
    });
  };

  useEffect(() => {
    const tag = options.find((option) => option.active)?.tag || "";
    fetchLatestItems(setLoading, setLatestItems, setError, tag);
  }, [options]);

  if (error) {
    return <ErrorInfo message={error} />;
  }

  if (loading) return <LoadingLatest />;
  return (
    <section className="latest">
      <HeaderWrapper header="Latest Products" largeGap>
        <>
          <Options options={options} handleOptionChange={handleOptionChange} />
          <div className="latest__container medium-top-gap">
            {latestItems.map((item) => (
              <LatestBox key={item.id} {...item} />
            ))}
          </div>
        </>
      </HeaderWrapper>
    </section>
  );
};

export default Latest;
