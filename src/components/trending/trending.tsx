import HeaderWrapper from "../UI/header-wrapper";
import TrendingCard from "./trending-card";
import { IItem } from "../../types/item";
import { useEffect, useState } from "react";
import LoadingBoxes from "../loading/loading-boxes";
import ErrorInfo from "../UI/error-box";
import { fetchTrendingItems } from "../../utils/functions";

const Trending = () => {
  const [trendingItems, setTrendingItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    fetchTrendingItems(setLoading, setTrendingItems, setError);
  }, []);

  if (error) {
    return <ErrorInfo message={error} />;
  }

  if (loading) return <LoadingBoxes header="Trending Products" />;
  return (
    <section className="trending">
      <HeaderWrapper header="Trending Products">
        <>
          <div className="trending__container medium-top-gap">
            {trendingItems?.map((item) => (
              <TrendingCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                discount={item.discount}
                price={item.price}
              />
            ))}
          </div>
        </>
      </HeaderWrapper>
    </section>
  );
};

export default Trending;
